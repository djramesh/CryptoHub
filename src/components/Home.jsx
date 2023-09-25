import React from "react";
import {
  Box,
  Image,
  Text,
  Card,
  Button,
  CardBody,
  Stack,
  ButtonGroup,
  CardFooter,
  Heading,
  Divider,
  Flex,
} from "@chakra-ui/react";
import cryptoVideo from "../assets/cryptoVideo.mp4";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        {/* <Image width={"full"} height={"full"} objectFit={"contain"} src={""} /> */}
        <video src={cryptoVideo} autoPlay muted loop></video>
        <Text
          fontSize={["3xl", "6xl"]} 
          textAlign={"center"}
          // justifyContent={"center"}
          color={"white"}
          position={"relative"}
          mt={"-560"}
          zIndex={"1"}
        >
          The World’s Leading <br /> Cryptocurrency Platform
        </Text>

        <Text
          fontSize={["2xl","3xl"]}
          textAlign={"center"}
          // justifyContent={"center"}
          fontWeight={'thin'}
          mt={'4'}
          color={"white"}
          position={"relative"}
          zIndex={"1"}
          letterSpacing={'widest'}
        >
          CryptoHub
        </Text>

        <div className="overlay"></div>
        <Flex justifyContent="center" mt={"10"}>
          <ButtonGroup spacing={4} mt={2}>
            <Button
              colorScheme="blue"
              size="lg" // Make the buttons larger
              bg="transparent" // Set the background to transparent
              _hover={{ bg: "blue.400", color: "white" }}
              border={"1px solid white"}
              borderRadius={"100"}
            >
              <Link to="/exchanges">Exchanges</Link>
            </Button>
            <Button
              colorScheme="blue"
              size="lg" // Make the buttons larger
              bg="transparent" // Set the background to transparent
              _hover={{ bg: "blue.400", color: "white" }}
              border={"1px solid white"}
              borderRadius={"100"}
            >
              <Link to="/coins">Coins</Link>
            </Button>
          </ButtonGroup>
        </Flex>
      </div>
    </div>
  );
};

export default Home;
