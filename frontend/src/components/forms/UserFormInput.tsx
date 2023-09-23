import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: { message?: string };
}

const FormInput: React.FC<FormInputProps> = ({ label, error, ...props }) => {
  
  return (
    <div>
      <label>{label}</label>
      <input {...props} />
      {error && error.message && <p>{error.message}</p>}
    </div>
  );
};

export default FormInput;
