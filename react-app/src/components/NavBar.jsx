import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Box,
  Flex,
  Image,
  Input,
  Link,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import "./NavBar.css";

function NavBar() {
  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      w="100%"
      bg={useColorModeValue("gray.800", "gray.900")}
      zIndex="1000"
      p="4"
      boxShadow="md"
    >
      <Flex justify="space-between" align="center">
        <Logo />
        <Search />
        <NavLinks />
      </Flex>
    </Box>
  );
}

function Logo() {
  return (
    <Link as={RouterLink} to="/" display="flex" alignItems="center">
      <Image src={logo} alt="TAISHOW Logo" height="3rem" />
    </Link>
  );
}

function Search() {
  const [query, setQuery] = useState("");
  const { colorMode } = useColorMode();

  const searchBgColor = useColorModeValue("gray.800", "gray.900");

  return (
    <Input
      className="search-input"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      bg={searchBgColor}
      color="white"
      border="none"
      borderRadius="md"
      width="15rem"
      _placeholder={{ color: colorMode === "light" ? "gray.400" : "gray.300" }}
    />
  );
}

function NavLinks() {
  return (
    <Flex gap="2rem">
      <NavLink to="/overview" label="電影資訊" />
      <NavLink to="/reviews" label="電影評論" />
      <NavLink to="/cinemas" label="影城資訊" />
      <NavLink to="/member" label="會員中心" />
    </Flex>
  );
}

function NavLink({ to, label }) {
  return (
    <Link
      as={RouterLink}
      to={to}
      color="white"
      position="relative"
      textDecoration="none"
      _after={{
        content: '""',
        position: "absolute",
        width: "100%", // 底线宽度与链接宽度相同
        borderBottom: "2px solid transparent", // 底线样式为透明
        bottom: "0", // 底线位置在链接底部
        left: "0", // 从链接左侧开始
        transform: "scaleX(0)", // 初始隐藏底线
        transformOrigin: "bottom right",
        transition: "transform 0.25s ease-out",
      }}
      _hover={{
        _after: {
          transform: "scaleX(1)", // 悬停时显示底线
          borderBottomColor: "white", // 修改底线颜色为白色
        },
      }}
    >
      {label}
    </Link>
  );
}

export default NavBar;
