import { useEffect } from 'react';
import './App.css';
import Input from './components/input.components';
import People from './components/people.components';
import { useSettingsStore } from './store';

function App() {
  const toggleDarkMode = useSettingsStore((state) => state.toggleDarkMode);
  const dark = useSettingsStore((state) => state.dark);

  useEffect(() => {
    if (dark) {
      document.querySelector('body')?.classList.add('dark');
    } else {
      document.querySelector('body')?.classList.remove('dark');
    }
  }, [dark]);

  return (
    <div className="App">
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <p>People</p>
      <Input />
      <People />
    </div>
  );
}

export default App;
