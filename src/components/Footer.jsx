import React from "react";
import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py="2rem" textAlign="center" borderTop="1px" borderColor="gray.200">
      &copy; {new Date().getFullYear()} Todo App. All rights reserved.
    </Box>
  );
};

export default Footer;
