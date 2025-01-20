import { PropsWithChildren } from "react";
import { toastContainer } from "./styles.css";

export const ToastContainer = ({children}: PropsWithChildren<{}>) => {
  return (
    <div tabIndex={-1} className={toastContainer}>
      {children}
    </div>
  )
}