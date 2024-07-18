import { Input } from "./input";
import { Label } from "./label";
import React from "react";

type Props = {
  label?: string;
  name: string;
  value?: any
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  labelClassName?: string;
};

function TextInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  labelClassName,
}: Props) {
  return (
    <div className="flex flex-col gap-2 w-full focus:border-primary">
      {label && (
        <Label htmlFor={name} className={labelClassName}>
          {label}
        </Label>
      )}
      <Input
        id={name}
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
