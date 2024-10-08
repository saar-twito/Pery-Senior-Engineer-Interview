import React, { useState, FormEvent } from 'react';
import Layout from '../../layout/Layout';
import style from './ScreenC.module.css';
import { LuMoveRight } from 'react-icons/lu';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import SubTitle from '../../components/SubTitle/SubTitle';

interface ScreenThreeProps {
  nextScreen: () => void;
  setArticleName: (articleName: string) => void;
}

const ScreenThree: React.FC<ScreenThreeProps> = ({ nextScreen, setArticleName }) => {
  const [articleSubject, setArticleSubject] = useState<string>('');

  const handleContinue = (e: FormEvent) => {
    e.preventDefault();
    setArticleName(articleSubject);
    nextScreen(); // Move to the next screen
  };

  return (
    <Layout
      leftContent={<Title title={'Welcome to Pery!'} />}
      rightContent={
        <form className={style.container} onSubmit={handleContinue}>
          <SubTitle subtitle={<>What would you like to read about?</>} />
          <p className={style.subTitle}>Dogs? molecular culinary? everything goes...</p>
          <label htmlFor="articleSubject" className={style.label}>Article subject</label>
          <input
            id="articleSubject"
            type="text"
            className={style.input}
            value={articleSubject}
            onChange={(e) => setArticleSubject(e.target.value)}
            placeholder="subject"
            required
          />

          <Button type='submit' content='Continue' icon={<LuMoveRight size={20} />} />
        </form>
      }
    />
  );
};

export default ScreenThree;
