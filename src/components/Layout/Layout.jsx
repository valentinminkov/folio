import React from "react";
import { Flex, Text, Box, Link } from "rebass";

const Name = () => (
  <>
    <Text fontSize={[2]} fontWeight="bold">
      V
    </Text>
    <Text fontSize={[1]}>alentin</Text>
    <Text fontSize={[2]} fontWeight="bold">
      M
    </Text>
    <Text fontSize={[1]}>inkov</Text>
  </>
);

const NavLinks = () => (
  <>
    {" "}
    <Link variant="link" href="#!" pr={2}>
      about
    </Link>
    <Link variant="linku" href="#!" pr={2}>
      projects
    </Link>
    <Link variant="link" href="#!">
      contact
    </Link>
  </>
);

const ShortDescription = ({ horizontalPadding }) => (
  <Flex pt={2} px={horizontalPadding} color={"white"}>
    <Text fontSize={[1]} fontStyle="italic">
      web developer
    </Text>
  </Flex>
);

export default function Layout({ children }) {
  const horizontalPadding = [3, 6];
  const verticalPaddingNav = [4, 5];
  const verticalPaddingChildren = [3];
  return (
    <>
      <Flex
        px={horizontalPadding}
        pt={verticalPaddingNav}
        color="white"
        alignItems="center"
      >
        <Name />
        <Box mx="auto" />
        <NavLinks />
      </Flex>
      <ShortDescription horizontalPadding={horizontalPadding} />

      <Flex pt={verticalPaddingChildren} px={horizontalPadding}>
        {children}
      </Flex>
    </>
  );
}
