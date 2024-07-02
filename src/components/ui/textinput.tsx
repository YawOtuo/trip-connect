import { Input } from "./input";
import { Label } from "./label";

type Props = {
  label?: string;
  name: string;
  value?: string;
  onChange?: any;
  placeholder?: string;
};

function TextInput({ label, name, value, onChange, placeholder }: Props) {
  return (
    <div className="flex flex-col gap-2 w-full focus:border-primary">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextInput;
