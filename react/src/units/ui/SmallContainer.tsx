import { ReactNode } from "react";

type SmallContainerProps = {
  children: ReactNode;
};

export default function SmallContainer({ children }: SmallContainerProps) {
  return <div className="max-w-lg mx-auto">{children}</div>;
}
