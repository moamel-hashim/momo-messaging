import { Image, Box } from "@chakra-ui/react";

export default function Background() {
  return (
    <Box>
      <Image
        src="https://images.unsplash.com/photo-1475518845976-0fd87b7e4e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </Box>
  );
}
