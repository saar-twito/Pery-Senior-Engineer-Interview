import React from 'react';
import style from './Layout.module.css';

interface LayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ leftContent, rightContent }) => {
  return (
    <div className={style.layout}>
      <div className={style.leftSection}>
        {leftContent}
      </div>
      <div className={style.rightSection}>
        {rightContent}
      </div>

      <a className={style.faqs} target='_blank' href="https://mypery.com/#faqs" rel="noreferrer">
        <img src="assets/support.png" alt="" />
        FAQs & help
      </a>
    </div>
  );
};

export default Layout;
