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
  Button
} from "@chakra-ui/react";
import React from "react";

const theme = extendTheme({
  fonts: {
    heading:`'Roboto', sans-serif`,
    body: `'Open Sans', sans-serif`,
  }
})

const colors = {
  darkOlive: "#5C7559",
  lighterOlive: "#D3E0AD",
  olive: "#9CB78C",
};

export default class Registration extends React.Component {
  render(): React.ReactNode {
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
              <Text>Register</Text>
            </Box>
            <FormControl isRequired>
              <Box>
                <FormLabel color={colors.lighterOlive}>username</FormLabel>
                <Input
                  type="text"
                  border={"none"}
                  borderBottom={"1px solid black"}
                  borderRadius={"0"}
                  marginBottom={"1rem"}
                />
              </Box>
              <Box position={"relative"}>
                <FormLabel color={colors.lighterOlive}>email</FormLabel>
                <Input
                  type="email"
                  border={"none"}
                  borderBottom={"1px solid black"}
                  borderRadius={"0"}
                  marginBottom={"1rem"}
                />
              </Box>
              <Box>
                <FormLabel color={colors.lighterOlive}>password</FormLabel>
                <Input
                  type="password"
                  border={"none"}
                  borderBottom={"1px solid black"}
                  borderRadius={"0"}
                  marginBottom={"2rem"}
                />
              </Box>
              <Box textAlign={"center"}>
                <Button
                  marginBottom={"2rem"}
                  padding={"1.5rem 5.5rem"}
                  backgroundColor={colors.olive}
                  color={colors.lighterOlive}
                >
                  Register
                </Button>
              </Box>
            </FormControl>
            <Box textAlign={"center"}>
              <Text>You do have an account? Login</Text>
            </Box>
          </Box>
        </Center>
      </ChakraProvider>
    );
  }
}
