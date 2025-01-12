import React from "react";
import { Button, ButtonProps } from "antd";
import { Link } from "react-router-dom";

// Define the type for the props
interface Props extends ButtonProps {
  text?: string;
  link?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const CommonButton: React.FC<Props> = ({
  text,
  link,
  children,
  className = "",
  onClick,
  ...props
}) => {
  return (
    <>
      {link ? (
        <Link
          to={link}
          className={`${className} inline-block bg-black py-1.5 px-4 rounded-lg hover:!bg-black/80 h-auto`}
        >
          <span className="text-white text-base block">{text || "Button"}</span>
          {children && children}
        </Link>
      ) : (
        <Button
          {...props}
          type="primary"
          onClick={onClick}
          className={`${className} bg-black py-1.5 px-4 rounded-lg hover:!bg-black/80 h-auto`}
        >
          {text && <span className="text-white text-base block">{text}</span>}
          {children && children}
        </Button>
      )}
    </>
  );
};

export default CommonButton;
