import { FC } from 'react';
import './Button.css';

interface ButtonProps {
  children: string;
  className?: string;
  onClick?: () => void;
}
const Button: FC<ButtonProps> = (props) => {
  const { children, className, onClick } = props;
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
