import React, { useEffect, useState } from "react";
import {
  Container,
  HStack,
  VStack,
  Image,
  Heading,
  Text,
  Skeleton,
  Spinner
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "₹" }) => {
  const [loading, setLoading] = useState(true);
  const [displayPrice, setDisplayPrice] = useState("NA");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDisplayPrice(price ? `${currencySymbol}${price}` : "NA");
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [price, currencySymbol]);

  return (
    <Link to={`/coin/${id}`} target={"blank"}>
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
        bgColor={'white'}
      >
        {loading ? (
          <Skeleton height="50px" width="50px" borderRadius={"30px"} />
         
        ) : (
          <Image
          src={img}
          w={"10"}
          h={"10"}
          objectFit={"contain"}
          alt="Exchanges_image"
        />
        )}
        {loading ? (
          <Skeleton height="20px" width="80%" />
        ):(
          <Heading size={"md"} noOfLines={1} textTransform={"uppercase"}>
          {symbol}
        </Heading>
        )}
        {loading ? (
          // Display a skeleton loader while loading
          <Skeleton height="20px" width="80%" />
        ) : (
        <Text noOfLines={1}>{name}</Text>
        )}
        {loading ? (
          // Display a skeleton loader while loading
          <Skeleton height="20px" width="80%" />
        ) : (
          <Text noOfLines={1}>{displayPrice}</Text>
        )}
      </VStack>
    </Link>
  );
};

export default CoinCard;
