import { forwardRef, InputHTMLAttributes, useId } from "react";

interface TextFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, className, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label
            htmlFor={inputId}
            className="uppercase text-sm"
          >
            {label}
          </label>
        )}

        <input
          id={inputId}
          ref={ref}
          className={
            className ||
            "p-2 border-b text-sm bg-transparent border-primary/20 focus:outline-none focus:ring-0 outline-none focus:border-primary duration-300"
          }
          {...props}
        />
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;