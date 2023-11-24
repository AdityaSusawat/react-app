interface Props {
  children: string;
  //we can force the typeScript to accept only one of these values otherwise it will throw an error at compile time itself
  colour?: "primary" | "secondary" | "danger"; //to mark a property optional, use a ? ; this can be used when we get an error after defining a default value for a prop
  onClick: () => void;
}

const Button = ({ children, colour = "primary", onClick }: Props) => {
  //we can give default values of a prop like this
  return (
    <button className={`btn btn-${colour}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
