
interface TextFieldProps {
  type?: "text" | "email" | "password";
  placeholder?: string;
  className?: string;
  value?: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function TextField({ type, placeholder, className, value, label, onChange }: TextFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="" className="uppercase text-sm">{label}</label>
      <input
        type={type || "text"}
        className={className || "p-2 border-b text-sm bg-transparent border-primary/20 focus:outline-none focus:ring-0 outline-none focus:border-primary duration-300 focus:ring-primary"}
        placeholder={placeholder || "Enter text"}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}