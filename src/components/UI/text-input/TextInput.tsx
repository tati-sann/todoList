import React, {FC, InputHTMLAttributes} from "react";
import "../styles/input.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const TextInput: FC<InputProps> = ({label, onChange, ...props}: InputProps) => {
  return (
    <label className="input">
      <input
        {...props}
        onChange={event => onChange(event)}
      />
    </label>
  )
}

export default TextInput;
