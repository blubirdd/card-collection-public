import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGuardCollection, getFailedAttempt, getAccessLog } from '../firebase';
import { onSnapshot } from 'firebase/firestore';
import { useAuth } from '../context/AuthProvider';
import Loader from '../components/Loader';
import Toggle from '../components/ThemeToggle';

const generateRandomToken = () => {
  return Math.random().toString(36).substring(2, 15);
};

function Lock() {
  const { unlock } = useAuth();
  const [password, setPassword] = useState('');
  const [hint, setHint] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = sessionStorage.getItem('unlockToken');
    if (storedToken) {
      unlock();
      navigate('/');
    }
  }, [unlock, navigate]);


  useEffect(() => {
    const collectionRef = getGuardCollection();

    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(newData);
      setHint(newData[0].hint);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleUnlock = async () => {
    if (password === data[0].password) {
      const token = generateRandomToken();
      //store the generated token in session storage
      sessionStorage.setItem('unlockToken', token);
      unlock();
      const timestamp = new Date();
      await getAccessLog(timestamp);

      navigate('/home');
    } else {
      // alert('Incorrect password. Please try again.');
      setError(true);
      setPassword('');

      const timestamp = new Date();
      const failedInput = password;
      await getFailedAttempt(failedInput, timestamp);

      setTimeout(() => {
        setError(false);
      }, 500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleUnlock();
    }
  };

  if (loading) {
    return <Loader message="Authenticating" />;
  }

  return (
    <>
      <div className="absolute right-0 top-0 z-[100] mr-4 mt-4 md:mr-6 md:mt-6">
        <Toggle />
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center py-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl py-4 font-bold text-gray-800 dark:text-white sm:text-5xl">
            <span className="bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-400 text-transparent">Card Collection</span>
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-xs opacity-70 text-start ps-1 pb-1 dark:text-white dark:opacity-70">Passcode required</p>
              <div className="relative">
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className={`py-3 px-11 pr-4 block mb-12 w-full font-bold border border-gray-200 text-gray-800 shadow-md  placeholder:text-gray-400 placeholder:opacity-80 rounded-xl text-sm focus:border-blue-500/30 focus:ring-blue-500/30 sm:p-4 sm:px-11
                 ${error ? 'bg-red-100 placeholder:text-gray-600' : 'bg-white dark:bg-gray-200'}`}
                  placeholder={error ? 'Incorrect passcode' : hint}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Lock;
