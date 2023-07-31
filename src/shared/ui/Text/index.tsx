interface textProps {
  children: string;
}

const Text = ({ children }: textProps) => {
  return <span>{children}</span>;
};

export default Text;
