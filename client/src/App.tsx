import { useState } from 'react';
import SignUpForm from './components/SignUpForm/SignUpForm';
import ArticleForm from './components/ArticleForm/ArticleForm';
import './App.css';

function App() {
  const [token, setToken] = useState<string>('');
  const [savedLanguage, setSavedLanguage] = useState<string>('');

  return (
    <div className='App'>
      <h1>Wikipedia Article Fetcher</h1>
      <SignUpForm setToken={setToken} setSavedLanguage={setSavedLanguage} />
      {token && (
        <div>
          <h3>Your token: {token}</h3>
        </div>
      )}
      <ArticleForm token={token} savedLanguage={savedLanguage} />
    </div>
  );
}

export default App;