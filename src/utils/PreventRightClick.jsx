"use client"
import React, { useEffect } from 'react'

const PreventRightClick = ({children}) => {
    useEffect(() => {
        const preventRightClick = (e) => {
          e.preventDefault();
        };
    
        document.addEventListener('contextmenu', preventRightClick);
    
        return () => {
          document.removeEventListener('contextmenu', preventRightClick);
        };
      }, []);
  return (
    <>
    {children}
    </>
  )
}

export default PreventRightClick