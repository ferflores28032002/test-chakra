import { SelectHTMLAttributes } from "react";

export interface CustomSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
}
