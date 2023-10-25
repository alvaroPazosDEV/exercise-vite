export interface Option {
  label: string;
  value: string;
}

interface Props {
  label: string;
  type: "text" | "number" | "select";
  options?: Option[];
  value: string;
  onChange: (text: string) => void;
  selectedValue?: string;
}

export default function Input({
  label,
  type,
  options,
  value,
  onChange,
  selectedValue,
}: Props) {
  const renderInputByType = () => {
    switch (type) {
      case "select":
        if (!options) return <></>;
        return (
          <select
            value={selectedValue}
            className="py-2 px-4 outline-none border-gray-400 border-1 rounded-md"
            onChange={(e) => onChange(e.target.value)}
          >
            <option value={""}>Select an option</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      default:
        return (
          <input
            className="py-2 px-4 outline-none border-gray-400 border-1 rounded-md"
            type={type}
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
            }}
          />
        );
    }
  };

  return (
    <div className="flex flex-col gap-2 text-sm text-slate-900 ">
      <label>{label}</label>
      {renderInputByType()}
    </div>
  );
}
