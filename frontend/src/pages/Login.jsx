import React, { useState } from "react";
import {
  Center,
  Box,
  Heading,
  Input,
  Button,
  IconButton,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" }); // Renamed pass to password
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://fitbuddy-h75f.onrender.com/api/auth/login", userData)
      .then((res) => {
        setLoading(false);
        const { token, role } = res.data;
        localStorage.setItem("fitbuddy", JSON.stringify({ token, role })); // Store under "fitbuddy" key
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        setError("Invalid credentials. Please try again.");
      });
  };

  return (
    <Center h="100vh" w="100vw">
      <Box maxW="md" mx="auto" mt="8">
        <Heading as="h2" mb="15" textAlign="center" size="lg">
          Login
        </Heading>
        <Box
          bg="white"
          p="25"
          pt="40px"
          rounded="lg"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          <form onSubmit={handleSubmit}>
            <Input
              mb="16"
              name="email"
              type="email"
              height="40px"
              width="350px"
              placeholder="Email"
              onChange={handleChange}
              value={userData.email}
            />
            <br />
            <InputGroup size="md">
              <Input
                mb="12"
                name="password" // Changed from "pass" to "password"
                type={showPassword ? "text" : "password"} // Toggle between text and password type
                placeholder="Password"
                height="40px"
                width="350px"
                value={userData.password} // Updated to "password"
                onChange={handleChange}
              />
              <InputRightElement
                width="3rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="absolute"
                right="0"
                height="100%"
              >
                <IconButton
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  variant="unstyled"
                  onClick={handleTogglePassword}
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  _focus={{ boxShadow: "none" }}
                  marginBottom="10px"
                  border="none"
                  backgroundColor="white"
                />
              </InputRightElement>
            </InputGroup>
            {error && (
              <p style={{ paddingBottom: "10px", color: "red" }}>{error}</p>
            )}
            <br />
            <Button
              type="submit"
              backgroundColor="skyblue"
              width="350px"
              height="40px"
              border="none"
              borderRadius="5px"
              fontWeight="600"
              fontSize="17px"
              color="white"
              marginTop="15px"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
          <Box mt={4} textAlign="center">
            <Button
              variant="link"
              color="skyblue"
              fontSize="17px"
              fontWeight="600"
              border="none"
              backgroundColor="white"
              marginTop="15px"
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