import { useState } from "react";
import { Container, VStack, Heading, Input, Button, FormControl, FormLabel, Box, Text, HStack, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Playlist = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [song, setSong] = useState("");
  const [songs, setSongs] = useState([]);

  const handleAddSong = () => {
    if (song) {
      setSongs([...songs, song]);
      setSong("");
    }
  };

  const handleRemoveSong = (index) => {
    const newSongs = [...songs];
    newSongs.splice(index, 1);
    setSongs(newSongs);
  };

  const handleSavePlaylist = () => {
    // Here you would typically save the playlist to the user's profile or a database
    console.log("Playlist Name:", playlistName);
    console.log("Songs:", songs);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading>Create Playlist</Heading>
        <FormControl id="playlist-name" isRequired>
          <FormLabel>Playlist Name</FormLabel>
          <Input
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            placeholder="Enter playlist name"
          />
        </FormControl>
        <FormControl id="song" isRequired>
          <FormLabel>Song</FormLabel>
          <HStack spacing={2}>
            <Input
              value={song}
              onChange={(e) => setSong(e.target.value)}
              placeholder="Enter song name"
            />
            <IconButton
              icon={<FaPlus />}
              aria-label="Add Song"
              onClick={handleAddSong}
            />
          </HStack>
        </FormControl>
        {songs.length > 0 && (
          <VStack align="stretch" spacing={2}>
            {songs.map((song, index) => (
              <Box key={index} borderWidth="1px" borderRadius="lg" p={2} display="flex" alignItems="center" justifyContent="space-between">
                <Text>{song}</Text>
                <IconButton
                  icon={<FaTrash />}
                  aria-label="Remove Song"
                  onClick={() => handleRemoveSong(index)}
                />
              </Box>
            ))}
          </VStack>
        )}
        <Button colorScheme="teal" size="lg" onClick={handleSavePlaylist}>
          Save Playlist
        </Button>
      </VStack>
    </Container>
  );
};

export default Playlist;