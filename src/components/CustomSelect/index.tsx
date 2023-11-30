import React, { memo } from "react";

import { FormControl, FormLabel, Select, SelectProps } from "@chakra-ui/react";

import { CustomSelectProps } from "./interfaces/CustomSelectProps.interface";

const CustomSelect: React.FC<CustomSelectProps & SelectProps> = memo(
  ({ label, options, ...rest }) => {
    return (
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <Select {...rest}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </FormControl>
    );
  }
);

export default CustomSelect;
