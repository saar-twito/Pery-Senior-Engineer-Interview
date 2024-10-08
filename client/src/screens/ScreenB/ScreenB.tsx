import React, { useState, FormEvent } from 'react';
import axiosInstance from '../../axiosConfig';
import Layout from '../../layout/Layout';
import style from './ScreenB.module.css';
import { LuMoveRight } from 'react-icons/lu';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import SubTitle from '../../components/SubTitle/SubTitle';

interface ScreenBProps {
  nextScreen: () => void;
  userName: string; // Username from ScreenOne
  setSavedLanguage: (language: string) => void;
  setToken: (token: string) => void; // Function to set the token after getting it from server
}

const ScreenB: React.FC<ScreenBProps> = ({ nextScreen, userName, setSavedLanguage, setToken }) => {
  const [language, setLanguage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send request to get the token
      const response = await axiosInstance.post('user', { userName, language });
      const { token } = response.data;

      // Update state with token and language
      setSavedLanguage(language);
      setToken(token);
      alert(`Sign Up successful! Your token: ${token}`);
      nextScreen(); // Move to the next screen
    } catch (error) {
      alert('Sign Up failed. Please try again.');
    }
    finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Layout
        leftContent={<Title title={isLoading ? 'Wait a sec...' : "Welcome to Pery!"} />}
        rightContent={
          <form className={style.container} onSubmit={handleSubmit}>
            <SubTitle subtitle={<>Nice to meet you!</>} />
            <p className={style.subTitle}>Which language do you prefer to read?</p>
            <div className={style.radioGroup}>
              <label className={style.radioLabel}>
                <input
                  type="checkbox"
                  name="language"
                  value="es"
                  checked={language === 'es'}
                  onChange={(e) => setLanguage(e.target.value)}
                />
                Spanish
              </label>
              <label className={style.radioLabel}>
                <input
                  type="checkbox"
                  name="language"
                  value="en"
                  checked={language === 'en'}
                  onChange={(e) => setLanguage(e.target.value)}
                />
                English
              </label>
              <label className={style.radioLabel}>
                <input
                  type="checkbox"
                  name="language"
                  value="fr"
                  checked={language === 'fr'}
                  onChange={(e) => setLanguage(e.target.value)}
                />
                French
              </label>
            </div>
            <Button disabled={isLoading} type='submit' content='Continue' icon={<LuMoveRight size={20} />} />
          </form>
        }
      />
    </>

  );
};

export default ScreenB;
