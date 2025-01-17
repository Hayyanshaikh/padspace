import React from "react";
import { Form, Input } from "antd";

// Define the type for the CommonInput component props as readonly
interface Props {
  name: string;
  className?: string;
  placeholder?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  size?: "large" | "middle" | "small";
  readonly?: boolean;
}

const CommonInput: React.FC<Props> = ({
  size,
  name,
  suffix,
  prefix,
  className,
  placeholder = "Enter text",
  readonly = false, // Default to false, can be overridden
}) => {
  return (
    <Form.Item name={name} className="w-full mb-0">
      <Input
        size={size}
        prefix={prefix}
        suffix={suffix}
        className={`${className} rounded-lg`}
        placeholder={placeholder || "Enter text"}
        readOnly={readonly}  // Apply the readonly prop to Input
      />
    </Form.Item>
  );
};

export default CommonInput;
