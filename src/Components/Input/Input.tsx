import React from "react";

interface Props {
  children?: React.ReactNode;
  value: string;
  width: number;
  height: number;
  text: string;
  onChange?: (e: any) => void;
}

const Input: React.FC<Props> = ({ 
    value,
    width,
    text,
    height,
    onChange,
  }) => { 
  return (
    <>
      <label> {text} </label>
          <input
          value={value}
          onChange={onChange}
          type="text" 
          size={width} 
          height={height}
          padding-right="1vh">
      </input>
    </>
  );
}

export default Input;

