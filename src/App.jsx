import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import BlogGrid from './Components/BlogGrid';
//import SignUp from './Components/SignUp';
//import SignIn from './Components/SignIn';
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <React.Fragment>
      {windowWidth <= 770 ? (
        <>
          <Navbar />
          <BlogGrid />
        </>
      ) : (
        <>
          <Header />
          <BlogGrid />
        </>
      )}
    </React.Fragment>
  );
}

export default App;