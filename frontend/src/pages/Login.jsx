import React, { useState } from "react";
import { Center, Box, Heading, Input, Button } from "@chakra-ui/react";
import axios from "axios";
import { usersUrl } from "../utils/server";

import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const [adminPass, setAdminPass] = useState(false);
  const [userPass, setUserPass] = useState(false);

  const [userData, setUserData] = useState({ email: "", pass: "" });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const checkAuthenticUser = (data) => {
    return data.find(
      (element) =>
        element.email === userData.email && element.password === userData.pass
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.email === "admin@gmail.com") {
      if (userData.pass === "admin") {
        localStorage.setItem("admin", "1");
        navigate("/admin");
      } else {
        setAdminPass(true);
      }
    } else {
      axios
        .get(usersUrl)
        .then((res) => {
          const user = checkAuthenticUser(res.data);
          if (user) {
            console.log("User is valid:", user);
            localStorage.setItem("user_id", user.id);
            navigate("/");
          } else {
            setUserPass(true);
            console.log("Invalid credentials");
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Center h="100vh" w="100vw">
      <Box maxW="md" mx="auto" mt="8">
        <Heading as="h1" mb="4" textAlign="center" size="lg">
          Login
        </Heading>
        <Box
          bg="white"
          p="8"
          rounded="lg"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          <form onSubmit={handleSubmit}>
            <Input
              mb="4"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              value={userData.email}
            />
            <Input
              mb="4"
              name="pass"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={userData.pass}
            />
            {adminPass && (
              <p style={{ paddingBottom: "10px", color: "red" }}>
                Enter correct password
              </p>
            )}
            {userPass && (
              <p style={{ paddingBottom: "10px", color: "red" }}>
                Please enter valid credential
              </p>
            )}
            <Button type="submit" colorScheme="blue" width="full">
              Login
            </Button>
          </form>
          <Box mt={4} textAlign="center">
            <Button
              variant="link"
              color="blue.500"
              onClick={() => navigate("/signup")}
            >
              Create new Account
            </Button>
          </Box>
        </Box>
      </Box>
    </Center>
  );
}
