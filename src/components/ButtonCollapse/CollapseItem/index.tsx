import { memo } from "react";

import { Text } from "@chakra-ui/react";

import { CollapseItemProps } from "../interfaces/CollapseItem.interface";

const CollapseItem = memo(({ name, onClick }: CollapseItemProps) => {
  return (
    <Text
      padding="0.4rem 1.5rem"
      rounded="md"
      _hover={{
        cursor: "pointer",
        backgroundColor: "gray.200",
      }}
      _dark={{
        _hover: {
          backgroundColor: "gray.700",
        },
      }}
      onClick={onClick}
    >
      {name}
    </Text>
  );
});

export default CollapseItem;
