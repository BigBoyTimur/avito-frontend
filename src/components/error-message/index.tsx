type Props = {
  children: string;
};
function ErrorMessage({ children }: Props) {
  return <span className="text-danger-500">{children}</span>;
}

export default ErrorMessage;
