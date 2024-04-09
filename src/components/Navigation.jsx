import React from "react";
import { Box, Heading, Flex, Spacer } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.100">
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Todo App
        </Heading>
      </Flex>
      <Spacer />
      <Box>{}</Box>
    </Flex>
  );
};

export default Navigation;
