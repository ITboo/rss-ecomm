import { FC } from 'react';
import './Title.css';

interface TitleProps {
  children: string;
  className?: string;
}
const Title: FC<TitleProps> = (props) => {
  const { children, className } = props;
  return <h2 className={className}>{children}</h2>;
};

export default Title;
