import { Button, HStack,Image,Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import cryptohub from '../assets/cryptohub.png'

const Header = () => {
  return (
    <HStack p={"4"}  spacing={6} shadow={"base"} bgColor={"blackAlpha.900"} zIndex={'1'} position={'relative'}> 
     <Link to="/"> {/* Use Link to wrap the Image */}
          <Image
            src={cryptohub}
            w={'53'}
            h={'16'}
            alt="logo"
            cursor={'pointer'}
          />
        </Link>
        <Spacer /> 
      <Button variant={"unstyled"} color={"white"} fontFamily={'Bebas Neue'} letterSpacing={'widest'} fontWeight={'30'}>
        <Link to="/">Home</Link>
      </Button>

      <Button variant={"unstyled"} color={"white"} fontFamily={'Bebas Neue'} letterSpacing={'widest'} fontWeight={'30'}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>

      <Button variant={"unstyled"} color={"white"} fontFamily={'Bebas Neue'} letterSpacing={'widest'} fontWeight={'30'}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
