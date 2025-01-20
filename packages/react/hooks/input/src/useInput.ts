import { ChangeEvent, useState } from "react";
import { UseInputProps, UseInputResult } from "./types";

export const useInput = (props: UseInputProps): UseInputResult => {
  const { 
    isDisabled = false,
    isReadOnly = false, 
    isRequired = false, 
    isInvalid = false,
    value,
    onChange,
    defaultValue,
    ...rest
  } = props;

  const isControlled = value !== undefined && onChange !== undefined;
  const [unControlledValue, setUnControlledValue] = useState(defaultValue ?? '');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(isControlled) {
      onChange(event);
    } else {
      setUnControlledValue(event.target.value);
    }
  };

  const currentValue = isControlled ? value : unControlledValue;

  return {
    inputProps: {
      ...rest,
      defaultValue,
      disabled: isDisabled,
      readOnly: isReadOnly,
      value: currentValue,
      onChange: handleChange,
    "data-disabled": isDisabled,
    "data-invalid": isInvalid,
    "aria-invalid": isInvalid,
    "aria-required": isRequired,
    },
    valueCount: currentValue.toString().length
  }
}