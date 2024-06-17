import React, { useState } from 'react';
import { Box, Input, Button, Heading, Center, Flex, useToast, Select } from '@chakra-ui/react';
import axios from 'axios';
import { FaRegTimesCircle} from 'react-icons/fa';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

export function Signup() {
  const [userData, setUserData] = useState({
    email: '',
    username: '',
    password: '',
    role: '', // Added role state
  });
  const [passBox, setPassBox] = useState(false);
  const [passwordValid, setPasswordValid] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    numbers: false,
    specialChar: false,
  });
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });

    if (name === 'password') {
      setPassBox(true);
      setPasswordValid({
        length: value.length >= 8,
        lowercase: /[a-z]/.test(value),
        uppercase: /[A-Z]/.test(value),
        numbers: /\d/.test(value),
        specialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      passwordValid.length &&
      passwordValid.lowercase &&
      passwordValid.numbers &&
      passwordValid.uppercase &&
      passwordValid.specialChar &&
      userData.role // Ensure role is selected
    ) {
      axios
        .post('https://fitbuddy-h75f.onrender.com/api/auth/register', userData)
        .then((res) => {
          toast({
            title: 'Account created successfully.',
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
          navigate('/login');
        })
        .catch((error) => {
          console.log(error);
          toast({
            title: 'Error creating account. Please try again.',
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
        });
    } else {
      toast({
        title: 'Please fill all fields correctly.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Center h="100vh" w="100vw">
      <Box maxW="md" mx="auto" mt="8">
        <Heading as="h2" mb="4" textAlign="center" size="lg">
          Sign Up
        </Heading>
        <Box
          mt="30px"
          bg="white"
          p="30"
          pt="40px"
          rounded="lg"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          <form onSubmit={handleSubmit}>
            <Input
              mb="14"
              w="350px"
              height="40px"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={userData.username}
            />
            <br />
            <Input
              mb="14"
              w="350px"
              height="40px"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              value={userData.email}
            />
            <br />
            <Input
              mb="14"
              name="password"
              type="password"
              w="350px"
              height="40px"
              placeholder="Password"
              onChange={handleChange}
              value={userData.password}
            />
            <br />
            <Select
              mb="14"
              w="350px"
              height="40px"
              name="role"
              placeholder="Select Role"
              onChange={handleChange}
              value={userData.role}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Select>
            <br />

            {passBox && (
              <div style={{ paddingBottom: '20px' }}>
                <Flex alignItems="center" h="30px">
                  {passwordValid.length ? (
                    <FaRegCircleCheck style={{ color: 'green' }} />
                  ) : (
                    <FaRegTimesCircle style={{ color: 'red' }} />
                  )}
                  <p
                    style={{
                      color: passwordValid.length ? 'green' : 'red',
                      paddingLeft: '2%',
                    }}
                  >
                    Minimum 8 characters
                  </p>
                </Flex>
                <Flex alignItems="center" h="30px">
                  {passwordValid.lowercase ? (
                    <FaRegCircleCheck style={{ color: 'green' }} />
                  ) : (
                    <FaRegTimesCircle style={{ color: 'red' }} />
                  )}
                  <p
                    style={{
                      color: passwordValid.lowercase ? 'green' : 'red',
                      paddingLeft: '2%',
                    }}
                  >
                    At least one lowercase letter
                  </p>
                </Flex>
                <Flex alignItems="center" h="30px">
                  {passwordValid.uppercase ? (
                    <FaRegCircleCheck style={{ color: 'green' }} />
                  ) : (
                    <FaRegTimesCircle style={{ color: 'red' }} />
                  )}
                  <p
                    style={{
                      color: passwordValid.uppercase ? 'green' : 'red',
                      paddingLeft: '2%',
                    }}
                  >
                    At least one uppercase letter
                  </p>
                </Flex>
                <Flex alignItems="center" h="30px">
                  {passwordValid.numbers ? (
                    <FaRegCircleCheck style={{ color: 'green' }} />
                  ) : (
                    <FaRegTimesCircle style={{ color: 'red' }} />
                  )}
                  <p
                    style={{
                      color: passwordValid.numbers ? 'green' : 'red',
                      paddingLeft: '2%',
                    }}
                  >
                    At least one number
                  </p>
                </Flex>
                <Flex alignItems="center" h="30px">
                  {passwordValid.specialChar ? (
                    <FaRegCircleCheck style={{ color: 'green' }} />
                  ) : (
                    <FaRegTimesCircle style={{ color: 'red' }} />
                  )}
                  <p
                    style={{
                      color: passwordValid.specialChar ? 'green' : 'red',
                      paddingLeft: '2%',
                    }}
                  >
                    At least one special character
                  </p>
                </Flex>
              </div>
            )}
            <Button
              type="submit"
              colorScheme="blue"
              width="350px"
              borderRadius="5px"
              color="white"
              backgroundColor="skyblue"
              border="none"
              height="40px"
              marginTop="10px"
            >
              Sign Up
            </Button>
          </form>
          <Box mt={4} textAlign="center">
            <Button
              variant="link"
              color="skyblue"
              fontWeight="600"
              fontSize="18px"
              border="lightGray"
              backgroundColor="white"
              marginTop="15px"
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Center>
  );
}