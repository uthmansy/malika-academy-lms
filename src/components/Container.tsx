import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`max-w-screen-xl mx-auto px-4  ${className}`}>
      {children}
    </div>
  );
};

export default Container;
