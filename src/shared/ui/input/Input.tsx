import { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react';
import './Input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: FC<InputProps> = (props) => {
  const { value, onChange, placeholder, className } = props;

  const [inputData, setInputData] = useState<string>('');

  const onChangeInputData = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  return (
    <input
      className={className}
      type="text"
      value={value ?? inputData}
      placeholder={placeholder}
      onChange={onChange ?? onChangeInputData}
    />
  );
};
