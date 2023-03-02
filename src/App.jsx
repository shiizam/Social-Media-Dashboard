import { Dashboard } from './components/dashboard/Dashboard'
import { useState, useEffect } from 'react'


function App() {

  //******* Dark Mode Functionality ********/
  const[theme,setTheme] = useState('light');
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light') 
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`${theme}`}>
      <Dashboard theme={theme} toggleTheme={toggleTheme}/>
    </div>
  )
}

export default App
