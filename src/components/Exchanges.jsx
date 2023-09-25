import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Container,
  HStack,
  VStack,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import ErrorComponent from "./ErrorComponent";
import Loader from "./Loader";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        console.log(data);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchExchanges();
  }, []);

  if (error) {
    return <ErrorComponent message={"Error while fetching exchanges!"} />;
  }

  return (
    <Container
      maxW={"100%"}
      bg="background: rgb(0,18,84);
    background: linear-gradient(113deg, rgba(0,18,84,1) 0%, rgba(202,224,255,1) 100%);"
    >
      <HStack justifyContent={"center"}>
        <Text
          color={"white"}
          mt={3}
          fontFamily={"Bebas Neue"}
          fontSize={"x-large"}
          letterSpacing={"widest"}
        >
          Exchanges
        </Text>
      </HStack>

      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap="wrap" justifyContent={"center"}>
            {exchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, img, rank, url }) => {
  return (
    <a href={url} target={"blank"}>
      <VStack
        w={"52"}
        shadow={"lg"}
        p={"8"}
        borderRadius={"lg"}
        transition={"all 0.5s"}
        m={"4"}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
        bgColor={"whiteAlpha.900"}
      >
        <Image
          src={img}
          w={"10"}
          h={"10"}
          objectFit={"contain"}
          alt="Exchanges_image"
        />
        <Heading size={"md"} noOfLines={1}>
          {rank}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
      </VStack>
    </a>
  );
};

export default Exchanges;
