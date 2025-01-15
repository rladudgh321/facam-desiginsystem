import { ToggleProps, UseToggleReturn } from './types';
import { useCallback, useState } from "react";

export const useToggle = ({
  isSelected = false,
}: ToggleProps): UseToggleReturn => {
  const [toggle, setToggle] = useState<boolean>(isSelected);

  const handleToggle = useCallback(() => {
    setToggle((prev: boolean) => !prev);
  },[]);

  return {
    isSelected: toggle,
    setSelected: setToggle,
    toggle: handleToggle,
  };
};