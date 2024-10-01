import { useState, FormEvent } from 'react';
import styles from './SignUpForm.module.css';
import axiosInstance from '../../axiosConfig';

interface SignUpFormProps {
  setToken: (token: string) => void;
  setSavedLanguage: (language: string) => void;
}

function SignUpForm({ setToken, setSavedLanguage }: SignUpFormProps) {
  const [userName, setUserName] = useState<string>('');
  const [language, setLanguage] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post('user', { userName, language });
      const { token } = response.data;
      setToken(token);
      setSavedLanguage(language);
      alert(`Sign Up successful! Your token: ${token}`);
    } catch (error) {
      alert('Sign Up failed. Please try again.');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.heading}>Sign Up</h2>
      <label htmlFor='Username' className={styles.label}>Username:</label>
      <input
        id='Username'
        type="text"
        className={styles.input}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />

      <label htmlFor='preferred-language' className={styles.label}>Preferred Language:</label>
      <input
        id='preferred-language'
        type="text"
        className={styles.input}
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        placeholder="e.g., en, fr, es"
        required
      />

      <button type="submit" className={styles.button}>Sign Up</button>
    </form>
  );
}

export default SignUpForm;
