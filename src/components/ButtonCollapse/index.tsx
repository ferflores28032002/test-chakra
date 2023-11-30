import { memo, useState } from "react";

import { Box, Button, Collapse, Flex } from "@chakra-ui/react";

import CollapseItem from "./CollapseItem";

import { IoIosArrowDown, IoIosArrowUp, IoMdSettings } from "react-icons/io";

import { ButtonCollapseProps, item } from "./interfaces";

const ButtonCollapse = memo((props: ButtonCollapseProps) => {
  const {
    icon = <IoMdSettings />,
    onSelect,
    items = [],
    title = "ButtonCollapse",
  } = props;

  const [show, setShow] = useState<boolean>(false);

  const handleToggle = () => setShow(!show);

  return (
    <Box>
      <Button
        background="transparent"
        justifyContent="space-between"
        margin="auto"
        onClick={handleToggle}
        width="95%"
        _hover={{
          cursor: "pointer",
          backgroundColor: "gray.200",
        }}
        _dark={{
          _hover: {
            backgroundColor: "gray.700",
          },
        }}
      >
        <Flex align="center">
          {icon}
          <Box ml={2}>{title}</Box>
        </Flex>
        {show ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </Button>

      <Box paddingX={4}>
        <Collapse in={show} animateOpacity>
          <Box>
            {items.map((item: item) => (
              <CollapseItem
                key={item.path}
                name={item.name}
                onClick={() => onSelect(item.path)}
              />
            ))}
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
});

export default ButtonCollapse;
