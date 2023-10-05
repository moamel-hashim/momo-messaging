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
  Image,
} from "@chakra-ui/react";
import "@chakra-ui/theme";
import React from "react";
import "../css/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

// const activeLabelStyles = {
//   transform: 'translate(-24px)'
// };

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
            <FormControl variant="floating">
              <Box position={"relative"}>
                <Input
                  type="text"
                  border={"none"}
                  borderBottom={`1px solid ${colors.lighterOlive}`}
                  borderRadius={"0"}
                  marginBottom={"1rem"}
                  focusBorderColor={`${colors.lighterOlive}`}
                  variant={"flushed"}
                  required
                />
                <FormLabel color={colors.lighterOlive}>username</FormLabel>
              </Box>
              <Box position={"relative"}>
                <Input
                  type="email"
                  border={"none"}
                  borderBottom={`1px solid ${colors.lighterOlive}`}
                  borderRadius={"0"}
                  marginBottom={"1rem"}
                  focusBorderColor={`${colors.lighterOlive}`}
                  variant={"flushed"}
                  required
                />
                <FormLabel color={colors.lighterOlive}>email</FormLabel>
              </Box>
              <Box position={"relative"}>
                <Input
                  type="password"
                  border={"none"}
                  borderBottom={`1px solid ${colors.lighterOlive}`}
                  borderRadius={"0"}
                  marginBottom={"1rem"}
                  focusBorderColor={`${colors.lighterOlive}`}
                  variant={"flushed"}
                  required
                />
                <FormLabel color={colors.lighterOlive}>password</FormLabel>
              </Box>
              <Box position={"relative"} margin={'1rem 0'} className="upload">
                <Input type="file" style={{ display: "none" }} id="file" />
                <FormLabel
                  htmlFor="file"
                  fontSize={"2rem"}
                  color={colors.lighterOlive}
                  display={'flex'}
                  alignItems={'center'}
                  gap={'10px'}
                >
                  <FontAwesomeIcon icon={faImage} />
                  <Text as={"span"} fontSize={'1rem'}>Add an avatar</Text>
                </FormLabel>
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
                  Register
                </Button>
              </Box>
            </FormControl>
            <Box textAlign={"center"}>
              <Text>
                You do have an account?{" "}
                <Text as={"span"} color={colors.darkOlive} cursor={"pointer"}>
                  Login
                </Text>
              </Text>
            </Box>
          </Box>
        </Center>
      </ChakraProvider>
    );
  }
}
