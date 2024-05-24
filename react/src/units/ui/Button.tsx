const CSS = `
  rounded-md
  bg-indigo-500
  px-3.5
  py-2.5
  text-sm
  font-semibold
  text-white
  shadow-sm
  hover:bg-indigo-600
  focus-visible:outline
  focus-visible:outline-2
  focus-visible:outline-offset-2
  focus-visible:outline-indigo-600
`;

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

const Button = ({ onClick, label }: ButtonProps) => {
  return (
    <button className={CSS} type="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
