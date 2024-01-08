import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PageInitializer() {
  const location = useLocation();

  //init preline on page change
  useEffect(() => {
    import('preline/preline');
  }, []);

  useEffect(() => {
    // @ts-ignore
    HSStaticMethods.autoInit();
  }, [location.pathname]);

};

export default PageInitializer;
