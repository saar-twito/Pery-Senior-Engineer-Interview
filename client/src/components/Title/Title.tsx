import style from './Title.module.css'

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <h1 className={style.title}>{title}</h1>
  )
}

export default Title