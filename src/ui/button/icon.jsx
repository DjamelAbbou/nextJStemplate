import Button from "./";

export default function IconButton({ children, icon, ...rest }) {
  return (
    <Button {...rest}>
      <div>{icon}</div>
      {children}
    </Button>
  );
}
