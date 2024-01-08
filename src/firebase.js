  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import { initializeApp } from 'firebase/app';
  import { getFirestore, collection, query, getDoc, updateDoc, doc, serverTimestamp } from 'firebase/firestore';
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCo1vIT0_hQgMtX213u0jBGivmYsdLiINI",
    authDomain: "card-collection-458b6.firebaseapp.com",
    projectId: "card-collection-458b6",
    storageBucket: "card-collection-458b6.appspot.com",
    messagingSenderId: "33010739444",
    appId: "1:33010739444:web:f0cf1e9beaee72e3d016a1"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const getGuardCollection = () => query(collection(db, 'guard_public'));

  const getFailedAttempt = async (failedInput, timestamp) => {
    // try {
    //   const failedAttemptsDocRef = doc(db, 'failed_attempts', 'failed_attempts_doc');
      
    //   const docSnapshot = await getDoc(failedAttemptsDocRef);
    //   const currentData = docSnapshot.data();
  
    //   const nextIndex = currentData ? Object.keys(currentData).filter(key => key.startsWith('failed_attempt')).length + 1 : 1;
  
    //   const newFieldName = `failed_attempt_${nextIndex}`;
    //   const combinedValue = `"${failedInput}",  ${timestamp}`;
  
    //   await updateDoc(failedAttemptsDocRef, {
    //     [newFieldName]: combinedValue,
    //   });
  
    // } catch (error) {
    //   console.error('Error adding failed attempt: ', error);
    // }
  };


  const getAccessLog = async (timestamp) => {
    // try{
    //   const acessLogDocRef = doc(db, 'access_log', 'access_log_doc');
      
    //   const docSnapshot = await getDoc(acessLogDocRef);
    //   const currentData = docSnapshot.data();

    //   const nextIndex = currentData ? Object.keys(currentData).filter(key => key.startsWith('log')).length + 1 : 1;
    //   const newFieldName = `log_${nextIndex}`;

    //   await updateDoc(acessLogDocRef, {
    //     [newFieldName]: timestamp,
    //   });

    //   console.log("Logged " + timestamp);
    // }

    // catch (error){
    //   console.error('Error adding access log attempt: ', error);
    // }
  }
  


  export { db, getGuardCollection, getFailedAttempt, getAccessLog };