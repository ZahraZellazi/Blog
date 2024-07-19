/*import React, { useState, useEffect } from "react";
import Header from "./Header";
import Navbar from "./Navbar";

function Layout({ children }) { 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWid  th(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <React.Fragment>
        {windowWidth <= 770 ? (
          <>
            <Navbar />
            { children }
          </>
        ) : (
          <>
            <Header />
            {children }
          </>
        )}
      </React.Fragment>
    </>
  );
}

export default Layout;
}*/