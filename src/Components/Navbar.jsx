import {
  Box,
  HStack,
  Image,
  Text,
  Badge,
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  VStack,
  Icon,
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Tag,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import logo from "../Assets/logo.png";
import { SearchIcon } from "@chakra-ui/icons";
import { CiUser, CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/AuthReducer/Action";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { isAuth } = useSelector((store) => store.AuthReducer);
  const searchRef = useRef();

  // ...........................

  const initType = searchParams.get("type");

  // ...........................

  const initBrand = searchParams.getAll("brand");

  // ............................

  const initPrice = searchParams.getAll("price");

  // ............................
  const initDiscount = searchParams.get("discount");

  // ............................

  const handleLogOut = () => {
    dispatch(login("logout"));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchRef.current.value) {
      const params = {};
      navigate(`/store`);
      initType && (params.type = initType);
      initBrand && (params.brand = initBrand);
      initPrice && (params.price = initPrice);
      initDiscount && (params.discount = initDiscount);
      searchRef.current.value && (params.q = searchRef.current.value);
      navigate({
        pathname: "/store",
        search: `?${createSearchParams(params)}`,
      });
    }
  };

  return (
    <>
      <Box
        w={"100%"}
        boxShadow={"md"}
        position={"sticky"}
        top={0}
        zIndex={"20"}
        bgColor="white"
      >
        <HStack w={"95%"} m={"auto"} justifyContent="space-between">
          <HStack spacing={"50px"}>
            {/* logo....................... */}
            <Box w="100px" onClick={() => navigate("/")}>
              <Image src={logo} w="40px" alt="logo" cursor="pointer" />
            </Box>

            {/* box2.............category */}
            <Box>
              <HStack spacing={"30px"}>
                <Box
                  _hover={{
                    borderBottom: "5px solid #ec008b",
                  }}
                  borderBottom="5px solid rgba(0,0,0,0.0)"
                  cursor="pointer"
                >
                  <Text
                    fontWeight={"700"}
                    fontSize="14px"
                    color={"#282c3f"}
                    p="20px 0px"
                    onClick={() => navigate("/store?type=Men")}
                  >
                    MEN
                  </Text>
                </Box>

                <Box
                  _hover={{
                    borderBottom: "5px solid #ec008b",
                  }}
                  borderBottom="5px solid rgba(0,0,0,0.0)"
                  cursor="pointer"
                >
                  <Text
                    fontWeight={"700"}
                    fontSize="14px"
                    color={"#282c3f"}
                    p="20px 0px"
                    onClick={() => navigate("/store?type=Women")}
                  >
                    WOMEN
                  </Text>
                </Box>

                <Box
                  _hover={{
                    borderBottom: "5px solid #ec008b",
                  }}
                  borderBottom="5px solid rgba(0,0,0,0.0)"
                  cursor="pointer"
                >
                  <Text
                    fontWeight={"700"}
                    fontSize="14px"
                    color={"#282c3f"}
                    p="20px 0px"
                  >
                    KIDS
                  </Text>
                </Box>

                <Box
                  _hover={{
                    borderBottom: "5px solid #ec008b",
                  }}
                  borderBottom="5px solid rgba(0,0,0,0.0)"
                  cursor="pointer"
                >
                  <Text
                    fontWeight={"700"}
                    fontSize="14px"
                    color={"#282c3f"}
                    p="20px 0px"
                  >
                    HOME & LIVING
                  </Text>
                </Box>

                <Box
                  _hover={{
                    borderBottom: "5px solid #ec008b",
                  }}
                  borderBottom="5px solid rgba(0,0,0,0.0)"
                  cursor="pointer"
                >
                  <Text
                    fontWeight={"700"}
                    fontSize="14px"
                    color={"#282c3f"}
                    p="20px 0px"
                  >
                    OFFERS
                  </Text>
                </Box>
              </HStack>
            </Box>
          </HStack>

          <HStack>
            <Box>
              <HStack>
                <Stack spacing="4">
                  <InputGroup
                    fontWeight={"400"}
                    fontSize="14px"
                    color={"#696e79"}
                    backgroundColor={"#f0e9e9"}
                    borderRadius={"4"}
                    borderColor={"white"}
                  >
                    <InputLeftElement
                      fontWeight={"500"}
                      fontSize="14px"
                      color={"#696e79"}
                      children={<SearchIcon />}
                    />

                    <Input
                      fontWeight={"400"}
                      fontSize="12px"
                      type={"text"}
                      w="500px"
                      focusBorderColor="white"
                      ref={searchRef}
                      onKeyDown={handleKeyDown}
                      placeholder="Search for products, brands and more"
                    />
                  </InputGroup>
                </Stack>
                <Box></Box>
              </HStack>
            </Box>

            <Box>
              <HStack spacing={"30px"}>
                <VStack spacing={"0px"}>
                  <Menu isOpen={isOpen}>
                    <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
                      <VStack spacing={"3px"}>
                        <Icon as={CiUser} fontSize="lg" />
                        <Text
                          fontSize={"12px"}
                          fontWeight={"700"}
                          color={"#282c3f"}
                        >
                          Profile
                        </Text>
                      </VStack>
                    </MenuButton>
                    <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                      <MenuItem>
                        <VStack spacing={2} alignItems="flex-start">
                          <Text
                            fontSize={"14px"}
                            color="#333333"
                            fontWeight={"700"}
                          >
                            Welcome
                          </Text>
                          <Text fontSize={"14px"} color="#333333">
                            {isAuth
                              ? "To remove account access"
                              : "To access account and manage orders"}
                          </Text>
                          <Tag
                            variant={"outline"}
                            colorScheme="pink"
                            size={"md"}
                            fontSize={"14px"}
                            onClick={() => {
                              isAuth ? handleLogOut() : navigate("/signup");
                            }}
                          >
                            {isAuth ? "LOGOUT" : " LOGIN/SIGNUP"}
                          </Tag>
                        </VStack>
                      </MenuItem>
                      <hr />
                      <MenuItem fontSize={"13px"}>Orders</MenuItem>
                      <MenuItem
                        fontSize={"13px"}
                        onClick={() => navigate("/wishlist")}
                      >
                        Wishlist
                      </MenuItem>
                      <MenuItem fontSize={"13px"}>Gift Cards</MenuItem>
                      <MenuItem fontSize={"13px"}>Contact Us</MenuItem>
                      <MenuItem>
                        <HStack fontSize={"13px"}>
                          <Text>Myntra Insider</Text>
                          <Badge
                            fontStyle={"italic"}
                            color={"white"}
                            backgroundColor={"pink.500"}
                          >
                            NEW
                          </Badge>
                        </HStack>
                      </MenuItem>
                      <hr />
                      <MenuItem fontSize={"13px"}>Myntra Credit</MenuItem>
                      <MenuItem fontSize={"13px"}>Coupons</MenuItem>
                      <MenuItem fontSize={"13px"}>Saved Cards</MenuItem>
                      <MenuItem fontSize={"13px"}>Saved VPA</MenuItem>
                      <MenuItem fontSize={"13px"}>Saved Addresses</MenuItem>
                    </MenuList>
                  </Menu>
                </VStack>

                <VStack
                  spacing={"3px"}
                  onClick={() => navigate("/wishlist")}
                  cursor="pointer"
                >
                  <Icon
                    onClick={() => navigate("/wishlist")}
                    as={CiHeart}
                    fontSize="xl"
                  />
                  <Text
                    fontSize={"12px"}
                    fontWeight={"700"}
                    color={"#282c3f"}
                    onClick={() => navigate("/wishlist")}
                  >
                    Wishlist
                  </Text>
                </VStack>

                <VStack
                  spacing={"3px"}
                  onClick={() => navigate("/cart")}
                  cursor="pointer"
                >
                  <Icon
                    as={BsHandbag}
                    fontSize="lg"
                    onClick={() => navigate("/cart")}
                  />
                  <Text
                    fontSize={"12px"}
                    fontWeight={"700"}
                    color={"#282c3f"}
                    onClick={() => navigate("/cart")}
                  >
                    Bag
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </HStack>
        </HStack>
      </Box>
    </>
  );
};

export default Navbar;
