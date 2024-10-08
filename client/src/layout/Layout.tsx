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
    </div>
  );
};

export default Layout;
