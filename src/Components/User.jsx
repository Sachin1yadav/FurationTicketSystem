import React, { useContext } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  IconButton,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
   
export const User = () => {
   

  const navigate = useNavigate();

  const Logout = () => {
     
  };

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={
            <FontAwesomeIcon
              fontSize="2xl"
              color={state.isAuth ? "green" : "black"}
              icon={faUser}
            />
          }
        />
        <MenuList borderRadius="2px">
          {state.isAuth ? (
            <MenuItem>
              <Button
                width="100%"
                p="-1"
                borderRadius="none"
                colorScheme="black"
                _hover={{ bg: "black", color: "white" }}
                variant="outline"
                onClick={Logout}
              >
                LOG OUT
              </Button>
            </MenuItem>
          ) : (
            <Link to="/login">
              <MenuItem>
                <Button
                  width="100%"
                  p="-1"
                  borderRadius="none"
                  colorScheme="black"
                  _hover={{ bg: "black", color: "white" }}
                  variant="outline"
                >
                  LOG IN
                </Button>
              </MenuItem>
            </Link>
          )}

          <MenuItem>
            <Button
              width="100%"
              p="-1"
              borderRadius="none"
              colorScheme="black"
              _hover={{ bg: "black", color: "white" }}
              variant="outline"
            >
              Register
            </Button>
          </MenuItem>
          
        </MenuList>
      </Menu>
    </>
  );
};