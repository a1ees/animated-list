import { useState, useEffect } from 'react';
import mokData from './api/mokData.json';
import { User } from "./ts/mok_interfaces.ts";
import CardList from "./components/CardList.tsx";
import './App.scss';
import './assets/styles/vendor/normalize.scss';

function App() {
  const [items, setItems] = useState<User[]>([]);

  useEffect(() => {
    setItems(mokData as User[]);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='app'>
      <CardList items={items} /> // Передаем items как props в CardList
    </div>
  );
}

export default App;
