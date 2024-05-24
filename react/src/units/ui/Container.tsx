import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="container mx-auto sm:px-6 lg:px-8">{children}</div>;
}
