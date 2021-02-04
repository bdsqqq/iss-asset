interface boldProps {
  className?: string | undefined;
  children: ReactNode;
}

const Bold: React.FC<boldProps> = ({ className, children }) => {
  return <span className={`font-bold ${className}`}>{children}</span>;
};

export default Bold;

import { ReactNode } from "react";
