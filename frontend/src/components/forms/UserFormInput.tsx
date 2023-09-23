import React, { forwardRef } from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: { message?: string };
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, className, ...props }, ref) => {

    const errorClass = error ? "border-red-500" : "border-gray-300";
    const inputClasses = `p-2 border ${errorClass} ${className}`;

    return (
      <div className="mb-4">
        <label className="block mb-2">{label}</label>
        <input
          ref={ref}
          className={inputClasses}
          {...props}
        />
        {error?.message && <p className="text-red-500 mt-1">{error.message}</p>}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;
