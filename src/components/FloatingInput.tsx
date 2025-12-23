import { InputHTMLAttributes, forwardRef } from "react";

interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ label, required, id, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {/* Fieldset creates the border with a gap */}
        <fieldset className="border border-border rounded-md px-3 h-14">
          <legend className="px-1 text-sm text-label">
            {label}
            {required && <span className="text-label text-[#e45959]">*</span>}
          </legend>

          <input
            ref={ref}
            id={id}
            className="w-full h-full bg-transparent outline-none text-foreground text-sm"
            {...props}
          />
        </fieldset>
      </div>
    );
  }
);

FloatingInput.displayName = "FloatingInput";

export default FloatingInput;
