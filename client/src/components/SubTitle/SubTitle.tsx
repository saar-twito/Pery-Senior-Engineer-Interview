import style from './SubTitle.module.css'

interface SubTitleProps {
  subtitle: React.ReactNode;
}

const SubTitle = ({ subtitle }: SubTitleProps) => {
  return (
    <h2 className={style.subtitle}>{subtitle}</h2>
  )
}

export default SubTitle