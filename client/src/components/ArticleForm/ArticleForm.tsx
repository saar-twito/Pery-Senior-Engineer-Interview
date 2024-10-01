import { useState, FormEvent } from 'react';
import styles from './ArticleForm.module.css';
import axiosInstance from '../../axiosConfig';

interface ArticleFormProps {
  token: string;
  savedLanguage: string;
}

function ArticleForm({ token, savedLanguage }: ArticleFormProps) {
  const [articleName, setArticleName] = useState<string>('');
  const [language, setLanguage] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Regular expression for valid article names (only letters, numbers, hyphens, and underscores)
  const validArticleNameRegex = /^[a-zA-Z0-9_-]+$/;

  const handleFetch = async (e: FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!validArticleNameRegex.test(articleName)) {
      setError('Invalid article name. Only letters, numbers, hyphens (-), and underscores (_) are allowed.');
      return;
    }

    const headers: Record<string, string> = {};
    if (token) headers['x-authentication'] = token;

    const selectedLanguage = language || savedLanguage;

    if (selectedLanguage) {
      headers['Accept-Language'] = selectedLanguage;
    }

    try {
      const response = await axiosInstance.get(`introduction/${articleName}`, {
        headers,
      });
      setResult(response.data.introduction);
      setError('');
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 'Error fetching the article.';
      setResult('');
      setError(errorMessage);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Fetch Article Introduction</h2>
      <form className={styles.form} onSubmit={handleFetch}>
        <label htmlFor="Article-Name" className={styles.label}>Article Name:</label>
        <input
          id="Article-Name"
          type="text"
          className={styles.input}
          value={articleName}
          onChange={(e) => setArticleName(e.target.value)}
          required
        />

        <label htmlFor="Language" className={styles.label}>Language (optional):</label>
        <input
          id="Language"
          type="text"
          className={styles.input}
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          placeholder="e.g., en, fr, es"
        />

        <button type="submit" className={styles.button}>Fetch Introduction</button>
      </form>

      {result && (
        <div className={styles.resultContainer}>
          <h3 className={styles.resultHeading}>Result:</h3>
          <p className={styles.resultText}>{result}</p>
        </div>
      )}

      {error && (
        <div className={styles.errorContainer}>
          <h3 className={styles.errorHeading}>Error:</h3>
          <p className={styles.errorText}>{error}</p>
        </div>
      )}
    </div>
  );
}

export default ArticleForm;
