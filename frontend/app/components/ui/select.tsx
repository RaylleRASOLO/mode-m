interface SelectProps {
  options: { value: string; label: string }[];
  label: string;
  className?: string;
  value?: string;
  defaultLabel?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({ options, label, className, value, defaultLabel, onChange }: SelectProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="" className="uppercase text-sm">{label}</label>
      <select className={className || "p-2 border-b text-sm bg-transparent border-primary/20 focus:outline-none focus:ring-0 outline-none focus:border-primary duration-300 focus:ring-primary"} value={value} onChange={onChange}>
        <option disabled defaultValue="0">{defaultLabel ? defaultLabel : "Selectionner une option"}</option>
        {options.map((option) => (
          <option className="text-black hover:bg-primary" key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}