import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  /////////STEP: 4

  const customStylesForCard = {
    borderRadiusCard: "10px",
    colors: {
      white: "white",
      black: "black",
      gray: "gray.500"
    },
    fontSizeCard:{
      fontSizeLg: "lg",
      fontSizeMd: "md"
    }
  }



  return (
    <>
      <VStack bg={customStylesForCard.colors.white} borderRadius={ customStylesForCard.borderRadiusCard }>
        <Image src={imageSrc} borderRadius={ customStylesForCard.borderRadiusCard } />

        <Box p="20px">
          <Heading 
            fontSize={customStylesForCard.fontSizeCard.fontSizeLg} 
            textAlign="left" 
            color={ customStylesForCard.colors.black }>{title}</Heading>
          <Text 
            fontSize={customStylesForCard.fontSizeCard.fontSizeMd} 
            color={ customStylesForCard.colors.gray } 
            my={4}>{description}</Text>
          <Text 
            fontSize={customStylesForCard.fontSizeCard.fontSizeLg} 
            color={customStylesForCard.colors.black}>
            <a href="#">See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></a>
          </Text>
        </Box>

      </VStack>
    </>
  );
};

export default Card;
