export default function EvenColumns({ children, className }) {
  return (
    <div className={`even-columns ${className ? className : ""}`}>
      {children}
    </div>
  );
}
