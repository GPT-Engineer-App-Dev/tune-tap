import { useState, useRef, useEffect } from "react";
import { Container, Text, VStack, Heading, Button, Box, Image, HStack } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [audioRef, setAudioRef] = useState(null);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);

  const progressRef = useRef(null);

  useEffect(() => {
    if (audioRef) {
      audioRef.current.ontimeupdate = () => {
        setProgress(audioRef.current.currentTime / audioRef.current.duration * 100);
      };
    }
  }, [audioRef]);

  const handlePlay = (song) => {
    if (currentSong === song) {
      audioRef.current.play();
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleSkip = (direction) => {
    const currentIndex = playlist.findIndex((song) => song === currentSong);
    let newIndex = currentIndex + direction;
    if (newIndex < 0) {
      newIndex = playlist.length - 1;
    } else if (newIndex >= playlist.length) {
      newIndex = 0;
    }
    setCurrentSong(playlist[newIndex]);
    setProgress(0);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audioRef.current.volume = e.target.value;
  };

  const playlist = ["song1.mp3", "song2.mp3", "song3.mp3"]; // Example playlist

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Music Streaming Service</Heading>
        <Text fontSize="lg">Stream your favorite music anytime, anywhere.</Text>
        <Box boxSize="sm">
          <Image src="/images/music-streaming.jpg" alt="Music Streaming" />
        </Box>
        <VStack spacing={4} direction="row">
          {playlist.map((song, index) => (
            <Button key={index} colorScheme="teal" size="lg" onClick={() => handlePlay(song)}>
              {song}
            </Button>
          ))}
        </VStack>
        <HStack spacing={4}>
          <Button colorScheme="teal" size="lg" leftIcon={<FaPlay />} onClick={handlePlay} isDisabled={!currentSong}>
            Play
          </Button>
          <Button colorScheme="teal" size="lg" leftIcon={<FaPause />} onClick={handlePause} isDisabled={!currentSong}>
            Pause
          </Button>
          <Button colorScheme="teal" size="lg" leftIcon={<FaForward />} onClick={() => handleSkip(1)} isDisabled={!currentSong}>
            Next
          </Button>
          <Button colorScheme="teal" size="lg" leftIcon={<FaBackward />} onClick={() => handleSkip(-1)} isDisabled={!currentSong}>
            Previous
          </Button>
        </HStack>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        <progress value={progress} max="100" ref={progressRef} />
        <audio ref={audioRef} src={currentSong} />
      </VStack>
    </Container>
  );
};

export default Index;