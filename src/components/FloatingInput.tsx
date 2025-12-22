import { InputHTMLAttributes, forwardRef } from "react";

interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ label, required, id, ...props }, ref) => {
    return (
      <div className="floating-input-wrapper">
        <input
          ref={ref}
          id={id}
          className="floating-input peer"
          placeholder=" "
          {...props}
        />
        <label htmlFor={id} className="floating-label">
          {label}
          {required && <span className="text-label">*</span>}
        </label>
      </div>
    );
  }
);

FloatingInput.displayName = "FloatingInput";

export default FloatingInput;
