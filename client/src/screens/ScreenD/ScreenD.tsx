import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosConfig';
import Layout from '../../layout/Layout';
import style from './ScreenD.module.css';
import Loader from '../../utils/Loader/Loader';
import { RiLoopLeftLine } from "react-icons/ri";
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';

interface ScreenDProps {
  token: string;
  articleName: string;
  language: string;
  startOver: () => void;
}

const ScreenD: React.FC<ScreenDProps> = ({ token, articleName, language, startOver }) => {
  const [articleContent, setArticleContent] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchArticle = async () => {
      setIsLoading(true);
      try {
        const headers: Record<string, string> = {
          'x-authentication': token,
          'Accept-Language': language,
        };
        const response = await axiosInstance.get(`introduction/${articleName}`, {
          headers,
        });
        console.log(response);

        setArticleContent(response.data.introduction);
      } catch (err) {
        setError('Failed to fetch the article. Please try again.');
      }
      finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, []);

  return (
    <Layout
      leftContent={
        <Title title={isLoading ? 'Wait a minute, loading your article...' : 'All set! Here’s your article'} />
      }
      rightContent={
        isLoading ? (
          <Loader />
        ) : (
          <div className={style.container}>
            <div className={style.imageContainer}>
              <img src="assets/celebratory.png" alt="Celebratory Illustration" className={style.image} />
            </div>
            <h2 className={style.subtitle}>Enjoy reading your article:</h2>
            {error ? (
              <p className={style.error}>{error}</p>
            ) : (
              <p className={style.articleContent}>{articleContent}</p>
            )}
            <Button onClick={startOver} type='submit' content='Start over' icon={<RiLoopLeftLine size={20} />} />
          </div>
        )
      }
    />
  );
};

export default ScreenD;


/* Note: it will be good if you also includes the Language (optional) to the UI */
