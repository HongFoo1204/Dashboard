"use client";

import { ReactElement, ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  VStack,
  Text,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  QuestionOutlineIcon,
  BellIcon,
  SettingsIcon,
} from "@chakra-ui/icons";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

const NavIconButton = ({
  label,
  icon,
}: {
  label: string;
  icon: ReactElement;
}) => (
  <IconButton
    aria-label="Setting"
    rounded={"full"}
    icon={icon}
    bg={"white"}
    _hover={{ bg: "white" }}
    _active={{ bg: "white" }}
    _focus={{ bg: "white" }}
  />
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userName = "V-Ray Sdn Bhd";
  const userType = "Organization";

  return (
    <>
      <Box bg={"white"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={2} alignItems={"center"}>
            <Box
              w={"32px"}
              h={"32px"}
              bgColor={"primary.400"}
              borderRadius={"10px"}
            />
            <VStack spacing={0} alignItems={"flex-start"}>
              <Text as="b" fontSize="xs">
                {userName}
              </Text>
              <Text fontSize="xs">{userType}</Text>
            </VStack>
          </HStack>
          <HStack spacing={2} alignItems={"center"}>
            {/* Create Dropdown */}
            <Menu>
              <MenuButton
                as={Button}
                cursor={"pointer"}
                variant={"solid"}
                colorScheme={"primary"}
                size={"sm"}
                minW={0}
                rightIcon={<ChevronDownIcon />}
              >
                Create
              </MenuButton>
              <MenuList>
                <MenuItem>Create Type 1</MenuItem>
                <MenuItem>Create Type 2</MenuItem>
              </MenuList>
            </Menu>
            <HStack spacing={0}>
              <NavIconButton
                label={"Information"}
                icon={<QuestionOutlineIcon />}
              />
              <NavIconButton label={"Notification"} icon={<BellIcon />} />
              <NavIconButton label={"Setting"} icon={<SettingsIcon />} />
            </HStack>
            {/* User Dropdown */}
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>User Dropdown 1</MenuItem>
                <MenuItem>User Dropdown 2</MenuItem>
                <MenuDivider />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
