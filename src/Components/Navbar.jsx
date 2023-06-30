import { ReactNode, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Center,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../Redux/users/user.types";

// import { userLogout } from "../Redux/users/user.actions";

export default function Navbar() {
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  const [auth, setAuth] = useState(false);
  const nav = useNavigate();
  const handelLogout = () => {
    // dispatch(userLogout());
    // nav("/");
  };
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setAuth(true);
    }
  }, [token]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    setAuth(false);
  };

  return (
    <>
      <Box
        zIndex={1000}
        position={"fixed"}
        top={0}
        w={"100%"}
        boxShadow={
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
        }
        bg={"gray"}
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box
            fontWeight={"bold"}
            cursor={"pointer"}
            onClick={() => {
              nav("/");
            }}
            color="white"
          >
            Furation Transport
          </Box>

          <Flex alignItems={"center"}>
            <Stack alignItems={"center"} direction={"row"} spacing={7}>
              {/* {token ? (
                <Button onClick={handleLogout}>Logout</Button>
              ) : (
                <div style={{ display: "flex", gap: "10px" }}>
                  {" "}
                  <Button
                    display={auth == true ? "none" : "block"}
                    bg={"red"}
                    m
                    color={"white"}
                    onClick={() => {
                      nav("/register");
                    }}
                  >
                    Sign up
                  </Button>
                  <Button
                    display={auth == true ? "none" : "block"}
                    bg={"red"}
                    m
                    color={"white"}
                    onClick={() => {
                      nav("/login");
                    }}
                  >
                    Login
                  </Button>
                </div>
              )} */}
              {}

              <Menu>
                <MenuButton
                  // display={auth == true ? "block" : "none"}
                  as={Button}
                  padding={2}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://cdn-icons-png.flaticon.com/512/219/219983.png"
                    }
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://cdn-icons-png.flaticon.com/512/219/219983.png"
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />

                  {token ? (
                    <div >
                      <p style={{margin:"20px",cursor:"pointer", borderBottom:"1px solid black", textAlign:"start"}}
                        onClick={() => {
                          nav("/myticket");
                        }}
                      >
                        My Tickets
                      </p>

                      <Button onClick={handleLogout}>Logout</Button>
                    </div>
                  ) : (
                    <div>
                      {" "}
                      <h2
                      style={{margin:"20px",cursor:"pointer", borderBottom:"1px solid black", textAlign:"start"}}
                        display={auth == true ? "none" : "block"}
                        onClick={() => {
                          nav("/register");
                        }}
                      >
                        Sign up
                      </h2>
                      <h2
                      style={{margin:"20px",cursor:"pointer", borderBottom:"1px solid black", textAlign:"start"}}
                        display={auth == true ? "none" : "block"}
                        onClick={() => {
                          nav("/login");
                        }}
                      >
                        Login
                      </h2>
                    </div>
                  )}
                  {/* <MenuItem
                    display={auth == !true ? "none" : "block"}
                    onClick={handelLogout}
                  >
                    Logout
                  </MenuItem> */}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
