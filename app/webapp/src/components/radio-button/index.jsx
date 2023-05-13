import { useState } from "react";

export const RadioButton = ({ name, autoFocus, children, checked, value, onChange, required }) => {
  return (
    <div className="form-control">
      <label className="label justify-start cursor-pointer">
        <input
          type="radio"
          name={name}
          onChange={onChange}
          value={value}
          className="radio checked:bg-red-500"
          checked={checked}
          required={required}
          autoFocus={autoFocus}
        />
        <span className="label-text ml-2 text-left">{children}</span>
      </label>
    </div>
  );
};

export const RadioButtonGroup = ({
  options,
  name,
  onChange,
  autoFocus,
  required=false,
}) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    // Update selected option and call the parent onChange handler
    setSelectedValue(event.target.value);
    onChange?.(event.target.value);
  };
  return (
    <div className="form-group">
      {options.map(({ value, label, textBoxOnSelected }, index) => (
        <div key={index}>
          <RadioButton
            onChange={handleChange}
            name={name}
            value={value}
            required={required}
            autoFocus={autoFocus && index === 0}
          >
            {label}
          </RadioButton>
          {textBoxOnSelected && selectedValue === value && (
            <input
              type="text"
              className="input input-bordered w-full"
              name={name + "-text"}
              placeholder={textBoxOnSelected}
              required={required}
            />
          )}
        </div>
      ))}
    </div>
  );
};
