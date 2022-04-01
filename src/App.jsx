import { useContext, useEffect } from 'react';
import './App.css';
import Body from './components/Body/Body';
import Navbar from './components/Navbar/Navbar';
import wheatherContext from './context/useContext';


function App() {
  const { getCurrentCity } = useContext(wheatherContext)

  useEffect(() => {
    getCurrentCity()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="app">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
