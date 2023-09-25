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
  Button,
  RadioGroup,
  Radio
} from "@chakra-ui/react";
import ErrorComponent from "./ErrorComponent";
import Loader from "./Loader";
import CoinCard from "./CoinCard";

const CoinDetails = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const btns = new Array(132).fill(1);

  const currencySymbol =
  currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        console.log(data);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) {
    return <ErrorComponent message={"Error while fetching coins!"} />;
  }

  return (
    <Container maxW={"100%"} bg="background: rgb(0,18,84);
    background: linear-gradient(113deg, rgba(0,18,84,1) 0%, rgba(202,224,255,1) 100%);" >
         <HStack justifyContent={"center"} display={'flex'} flexDirection={'column'}>
        <Text
          color={"white"}
          mt={3}
          fontFamily={"Bebas Neue"}
          fontSize={"x-large"}
          letterSpacing={"widest"}
        >
          Coins
        </Text>
        <Text fontWeight={'thin'} fontSize={'small'} color={'white'}>(Click on the coins to know more)</Text>
      </HStack>
      {loading ? (
        <Loader />
      ) : (
        <>
        <RadioGroup value={currency} onChange={setCurrency} p={"8"} color={'white'}> 
          <HStack justifyContent={'center'}>
            <Radio value={"inr"}>₹ (INR)</Radio>
            <Radio value={"usd"}>$ (USD)</Radio>
            <Radio value={"eur"}>€ (EUR)</Radio>
          </HStack>
        </RadioGroup>
          <HStack wrap="wrap" justifyContent={"space-evenly"} >
            {coins.map((i) => (
              <CoinCard
                id={i.id}
                key={i.id}
                name={i.name}
                img={i.image}
                symbol={i.symbol}
                price={i.current_price}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
       
      <HStack w={"full"} overflowX={"auto"} p={"8"}>
        {btns.map((item, index) => (
          <Button
            bgColor={"blackAlpha.900"}
            color={"white"}
            onClick={() => changePage(index+1)}
          >
            {index+1}
          </Button>
        ))}
      </HStack>
      </>
      )}
    </Container>
  );
};

export default CoinDetails;
