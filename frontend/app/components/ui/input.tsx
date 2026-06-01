interface InputProps {
  placeholder?: string;
  type?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ placeholder, type, className, value, onChange }: InputProps) {
  return (
    <input
      type={type || "text"}
      className={className || "px-4 py-2 border-b-1 bg-transparent border-primary focus:outline-none focus:ring-2 outline-none focus:ring-primary"}
      placeholder={placeholder || "Enter text"}
      value={value}
      onChange={onChange}
    />
  );
}