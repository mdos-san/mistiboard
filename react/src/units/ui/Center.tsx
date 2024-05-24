import { ReactNode } from "react";

type CenterProps = {
  children: ReactNode;
};

const Center = ({ children }: CenterProps) => {
  return <div className="place-content-center h-full">{children}</div>;
};

export default Center;
