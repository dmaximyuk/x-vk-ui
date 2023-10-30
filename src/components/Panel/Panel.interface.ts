import type { ReactNode } from "react";

export interface PanelProps extends React.HTMLProps<HTMLDivElement> {
  pageHeader: ReactNode;
}
