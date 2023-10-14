import React from 'react';

interface InputProps {
  label: string;
  type: 'text' | 'textarea';
  value: string;
  onChange: (value: string) => void;
  isInput: boolean;
  isRequired?: boolean;
  id?: string;
}

const Input: React.FC<InputProps> = ({ label, type, value, onChange, isInput, isRequired, id }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  const InputElement = isInput ? 'input' : 'textarea';

  return (
    <div className='relative input'>
      {InputElement === 'input' ? (
        <input
          className='rounded-[15px] outline outline-[1px] text-primaryDark dark:text-primaryLight dark:outline-borderDark outline-borderLight w-full p-[15px]'
          type={type}
          value={value}
          onChange={handleInputChange}
          id={id}
          autoComplete="off"
        />
      ) : (
        <textarea
          className='rounded-[15px] outline outline-[1px] text-primaryDark dark:text-primaryLight dark:outline-borderDark outline-borderLight w-full p-[15px]'
          value={value}
          onChange={handleInputChange}
          id={id}
          autoComplete="off"
        />
      )}
      <label htmlFor={id} className={`absolute cursor-text left-[15px] top-[15px] text-[#A0A0A0] ${value !== '' ? 'input-active' : ''}`}>
        {label}
      </label>
    </div>
  );
};

export default Input;
