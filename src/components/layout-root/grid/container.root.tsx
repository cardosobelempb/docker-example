import { ReactNode } from "react";

type ContainerRootProps = {
  children: ReactNode;
  className?: string;
};

export const ContainerRoot: React.FC<ContainerRootProps> = (props) => {
  return (
    <main {...props} className={`grid gap-y-6 ${props.className}`}>
      {props.children}
    </main>
  );
};
