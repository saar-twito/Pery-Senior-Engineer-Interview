import React, { useState } from 'react';
import style from './ScreenA.module.css';
import Layout from '../../layout/Layout';
import { CiUnlock } from "react-icons/ci";
import { LuMoveRight } from "react-icons/lu";
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import SubTitle from '../../components/SubTitle/SubTitle';

interface ScreenOneProps {
  nextScreen: () => void;
  setUserName: (userName: string) => void;
}

const ScreenA: React.FC<ScreenOneProps> = ({ nextScreen, setUserName }) => {
  const [userEmail, setUserEmail] = useState<string>('');

  const handleContinue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUserName(userEmail);
    nextScreen();
  };

  return (
    <Layout
      leftContent={<Title title={'Welcome to Pery!'} />}
      rightContent={
        <form className={style.container} onSubmit={(e) => handleContinue(e)}>
          <SubTitle subtitle={<>Love learning new stuff?<br />Get an article on any subject you like!</>} />
          <label htmlFor="email" className={style.label}>Type your email address</label>
          <input
            id="email"
            type="email"
            className={style.input}
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="me@email.com"
            required
          />
          <Button type='submit' content='Continue' icon={<LuMoveRight size={20} />} />
          <p className={style.terms}> <CiUnlock /> By clicking "continue" I agree to Pery's terms</p>
        </form>
      }
    />
  );
};

export default ScreenA;
