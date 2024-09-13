import { ReactNode } from "react";

function GridContainer({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{children}</div>
  );
}

export default GridContainer;
