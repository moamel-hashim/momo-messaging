import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Center,
  Box,
  Text,
  ChakraProvider,
  extendTheme,
  Heading,
  Button,
} from "@chakra-ui/react";
import "@chakra-ui/theme";
import React from "react";
import "../css/App.css";

const colors = {
  darkOlive: "#5C7559",
  lighterOlive: "#D3E0AD",
  olive: "#9CB78C",
};

const theme = extendTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  colors,
});




export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  handleUsernameChange = (e) => {
    this.setState({username: e.target.value});
  };

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  };

  render() {
    const {username, password} = this.state;
    return (
      <ChakraProvider theme={theme}>
        <Center
          position={"relative"}
          maxW={"400px"}
          margin={"0 auto"}
          height={"100vh"}
          flexDirection={"column"}
          zIndex={"1"}
        >
          <Box
            padding={"1rem"}
            width={"100%"}
            borderRadius={"20px"}
            background={"rgb(254 254 254 / 50%)"}
            backdropBlur={"10px"}
          >
            <Box textAlign={"center"} marginBottom={"1rem"}>
              <Heading as={"h2"} color={colors.darkOlive}>
                Momo Message
              </Heading>
            </Box>
            <Box textAlign={"center"}>
              <Text>Login</Text>
            </Box>
            <FormControl variant="floating">
              <Box position={"relative"} margin={'1.5rem 0'}>
                <Input
                  type="text"
                  border={"none"}
                  borderBottom={`1px solid ${colors.lighterOlive}`}
                  borderRadius={"0"}
                  marginBottom={"1.5rem"}
                  focusBorderColor={`${colors.lighterOlive}`}
                  variant={"flushed"}
                  required
                  value={username}
                  onChange={this.handleUsernameChange}
                />
                {username === '' ? <FormErrorMessage>Username is Required</FormErrorMessage> : null}
                <FormLabel color={colors.lighterOlive}>username</FormLabel>
              </Box>
              <Box position={"relative"}>
                <Input
                  type="password"
                  border={"none"}
                  borderBottom={`1px solid ${colors.lighterOlive}`}
                  borderRadius={"0"}
                  marginBottom={"1.5rem"}
                  focusBorderColor={`${colors.lighterOlive}`}
                  variant={"flushed"}
                  required
                />
                {password === '' ? <FormErrorMessage>Password is Required</FormErrorMessage> : null}
                <FormLabel color={colors.lighterOlive}>password</FormLabel>
              </Box>
              <Box textAlign={"center"}>
                <Button
                  margin={"2rem 0"}
                  padding={"1.5rem 5.5rem"}
                  colorScheme={colors.lighterOlive}
                  backgroundColor={colors.darkOlive}
                  color={colors.lighterOlive}
                  type="submit"
                  className="button"
                  letterSpacing={"1px"}
                  textTransform={"capitalize"}
                >
                  Login
                </Button>
              </Box>
            </FormControl>
            <Box textAlign={"center"}>
              <Text>
                You do have an account?{" "}
                <Text as={"span"} color={colors.darkOlive} cursor={"pointer"}>
                  Register
                </Text>
              </Text>
            </Box>
          </Box>
        </Center>
      </ChakraProvider>
    );
  }
}
