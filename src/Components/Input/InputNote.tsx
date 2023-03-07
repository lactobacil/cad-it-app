

interface Props {
    children?: React.ReactNode;
    value: string;
    width: number;
    height: number;
    text: string;
    placeholder: string;
    onChange?: (e: any) => void;
}

const InputNote: React.FC<Props> = ({ 
    value,
    width,
    text,
    height,
    placeholder,
    onChange,
  }) => { 
  return (
    <>
      <label> {text} </label>
          <input
          value={value}
          onChange={onChange}
          style={{height: "100vh"}}
          height={height}
          placeholder={placeholder}
          padding-right="1vh">
      </input>
    </>
  );
}

export default InputNote;