import { ReactNode } from "react";

interface Props {
  children: ReactNode; //we can pass HTML content in components as props using this ReactNode
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <>
      <div className="alert alert-primary alert-dismissible">
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </>
  );
};

export default Alert;
