import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';

import { useEffect, useState } from 'react';
import icon from '../../assets/icon.svg';
import './App.css';
import 'tailwindcss/tailwind.css';

const Hello = () => {
  const [greeting, setGreeting] = useState('');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    window.grpc.GetGreeting({ language }, (_, val) => {
      if (val) {
        setGreeting(val.greeting);
      }
    });
  }, [language]);

  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <p className="text-2xl">Electron + React + gRPC = Love</p>
      <p>
        Python says <span className="text-sky-400"> {greeting}</span>{' '}
      </p>
      <div className="flex w-full justify-around">
        <button
          type="button"
          onClick={() => setLanguage('sv')}
          className={`${language === 'sv' ? 'text-white' : 'text-gray-400'}`}
        >
          🇸🇪
        </button>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`${language === 'en' ? 'text-white' : 'text-gray-400'}`}
        >
          🇺🇸
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
