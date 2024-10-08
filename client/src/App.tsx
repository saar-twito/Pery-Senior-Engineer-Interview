import React, { useState } from 'react';
import ScreenA from './screens/ScreenA/ScreenA';
import ScreenB from './screens/ScreenB/ScreenB';
import ScreenC from './screens/ScreenC/ScreenC';
import ScreenD from './screens/ScreenD/ScreenD';
import './App.css';

function App() {
  const [screen, setScreen] = useState(1);
  const [token, setToken] = useState<string>(''); // State for token, set by the HTTP request
  const [savedLanguage, setSavedLanguage] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [articleName, setArticleName] = useState<string>('');

  const nextScreen = () => setScreen((prev) => (prev < 4 ? prev + 1 : prev));
  const prevScreen = () => setScreen((prev) => (prev > 1 ? prev - 1 : prev));

  const renderScreen = () => {
    switch (screen) {
      case 1:
        return <ScreenA nextScreen={nextScreen} setUserName={setUserName} />;
      case 2:
        return (
          <ScreenB
            nextScreen={nextScreen}
            userName={userName}
            setSavedLanguage={setSavedLanguage}
            setToken={setToken}
          />
        );
      case 3:
        return (
          <ScreenC
            nextScreen={nextScreen}
            setArticleName={setArticleName}
          />
        );
      case 4:
        return (
          <ScreenD
            token={token}
            articleName={articleName}
            language={savedLanguage}
            startOver={() => setScreen(1)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {/* <h1>Wikipedia Article Fetcher</h1>
      {token && (
        <div>
          <h3>Your token: {token}</h3>
        </div>
      )}
      {userName && <p>Welcome, {userName}!</p>} */}
      {renderScreen()}
    </div>
  );
}

export default App;
