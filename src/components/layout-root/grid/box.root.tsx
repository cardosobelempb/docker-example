import { ReactNode } from "react";

type BoxRootProps = {
  children: ReactNode;
  className?: string;
};

export const BoxRoot: React.FC<BoxRootProps> = (props) => {
  return (
    <div {...props} className={`grid w-full ${props.className}`}>
      {props.children}
    </div>
  );
};
