import { ChangeEvent, ChangeEventHandler, ReactNode, useCallback } from "react";

const CSS_LABEL = `
  block
  text-sm
  font-medium
  leading-6
  text-gray-900
`;

const CSS_INPUT = `
  block
  w-full
  rounded-md
  border-0
  py-1.5
  text-gray-900
  shadow-sm
  ring-1
  ring-inset
  ring-gray-300
  placeholder:text-gray-400
  focus:ring-2
  focus:ring-inset
  focus:ring-indigo-600
  sm:text-sm
  sm:leading-6
`;

type InputProps = {
  id: string;
  type: string;
  label: ReactNode;
  placeholder?: string;
  onChange?: (newValue: string) => void;
};

export default function Input({
  id,
  type,
  label,
  placeholder,
  onChange,
}: InputProps) {
  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.currentTarget.value);
      }
    },
    [onChange],
  );

  return (
    <div>
      <label htmlFor={id} className={CSS_LABEL}>
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          name={id}
          id={id}
          className={CSS_INPUT}
          placeholder={placeholder}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
}
