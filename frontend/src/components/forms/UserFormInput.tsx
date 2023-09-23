import React, { forwardRef } from 'react';
import InputMask from 'react-input-mask';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  mask?: string;
  error?: { message?: string };
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({ label, mask, error, ...props }, ref) => {
  return (
    <div className="mb-4">
      <label className="block mb-2">{label}</label>
      {mask ? (
        <InputMask mask={mask} {...props}>
          {(inputProps: any) => <input ref={ref} className={`p-2 border ${error ? "border-red-500" : "border-gray-300"}`} {...inputProps} />}
        </InputMask>
      ) : (
        <input
          ref={ref}
          className={`p-2 border ${error ? "border-red-500" : "border-gray-300"}`}
          {...props}
        />
      )}
      {error && error.message && <p className="text-red-500 mt-1">{error.message}</p>}
    </div>
  );
});
FormInput.displayName = "FormInput";

export default FormInput;
