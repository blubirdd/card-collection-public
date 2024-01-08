import React, { useState, useEffect } from 'react';
import { useLocation, Route, Routes, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar.jsx';
import Construction from './pages/Construction.jsx';
import { useAuth } from './context/AuthProvider.jsx';
import Lock from './pages/Lock.jsx';
import PageInitializer from './components/PageInitializer.jsx';
import Loader from './components/Loader.jsx';
import Home from './pages/Home.jsx';
import Pokemon from './pages/Pokemon.jsx';
import Other from './pages/Other.jsx';
import Onepiece from './pages/Onepiece.jsx';


function App() {

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);

  }, []);

  const [isLoading, setIsLoading] = useState(true);
  // const [isUnlocked, setIsUnlocked] = useState(false);

  //prevent rc
  useEffect(() => {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
    });
  }, []);

  //intiaizlie aos
  useEffect(() => {
    AOS.init();
  }, []);


  const unlock = () => {
    setIsUnlocked(true);
  };

  if (isLoading) {
    return <Loader message="Loading" />;
  }

  return (
    <>
      <PageInitializer />
      {!isAuthenticated ? (
        <Routes>
          <Route path="*" element={<Lock unlock={unlock} />} />
        </Routes>
      ) : (
        <>
          <Navbar />
          <div className="mt-14">
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/pokemon" element={<Pokemon />} />
              <Route path="/onepiece" element={<Onepiece />} />
              <Route path="/other" element={<Other />} />
              <Route path="*" element={<Construction />} />
            </Routes>
          </div>
        </>
      )}
    </>
  );
}

export default App;
