import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Music Streaming Service</Heading>
        <Text fontSize="lg">Stream your favorite music anytime, anywhere.</Text>
        <Box boxSize="sm">
          <Image src="/images/music-streaming.jpg" alt="Music Streaming" />
        </Box>
        <VStack spacing={4} direction="row">
          <Button colorScheme="teal" size="lg" leftIcon={<FaPlay />}>Play</Button>
          <Button colorScheme="teal" size="lg" leftIcon={<FaPause />}>Pause</Button>
          <Button colorScheme="teal" size="lg" leftIcon={<FaForward />}>Next</Button>
          <Button colorScheme="teal" size="lg" leftIcon={<FaBackward />}>Previous</Button>
          <Button as={Link} to="/playlist" colorScheme="teal" size="lg">Create Playlist</Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;