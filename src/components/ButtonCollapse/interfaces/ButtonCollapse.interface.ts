import { ReactNode } from "react";

export interface ButtonCollapseProps {
  title?: string;
  icon?: ReactNode;
  items: item[];
  onSelect: (route: string) => void;
}

export type item = {
  path: string;
  name: string;
};
