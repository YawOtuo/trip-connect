import { Input } from "./input";
import { Label } from "./label";

type Props = {
  label?: string;
  name: string;
  value?: string;
  onChange?: any;
  placeholder?: string;
  type?: string;
  required?: boolean;
  labelClassName? : string
};

function TextInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  type,
  required,
  labelClassName
}: Props) {
  return (
    <div className="flex flex-col gap-2 w-full focus:border-primary">
      <Label htmlFor={name} className={labelClassName}>{label}</Label>
      <Input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        required={required}
      />
    </div>
  );
}

export default TextInput;
