import React, { memo } from "react";

import { InputProps, FormControl, FormLabel, Input } from "@chakra-ui/react";

import { CustomInputProps } from "./interfaces/CustomInputProps.interface";

const CustomInput: React.FC<CustomInputProps & InputProps> = memo(
  ({ label, ...rest }) => {
    return (
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <Input {...rest} />
      </FormControl>
    );
  }
);

export default CustomInput;
