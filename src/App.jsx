
import { useEffect, useLayoutEffect, useState } from 'react'
import './App.css'

function App() {


  useEffect(() => {
    console.log("useEffect is run");
  }, []);


  useLayoutEffect(() => {
    console.log("useLayoutEffect is run");
  }, []);

  return (
    <div>
      <p>Test</p>
    </div>
  )

}


export default App
