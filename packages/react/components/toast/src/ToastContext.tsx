import { createContext } from "react";
import { ToastPayload } from "./types";


export type ToastConfigProps = {
  payload: ToastPayload;
  duration?: number;
}

export type ToastContextProps = {
  toast: (toastProps: ToastConfigProps) => void;
}
export const ToastContext = createContext<ToastContextProps>({
  toast: () => {}  
});