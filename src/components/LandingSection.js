import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

//////
const avatarUrl = "https://i.pravatar.cc/150?img=7";
//////

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    {/* //////STEP:2 */}
    
    <VStack mb={ 7 }>
      <Avatar size="xl" name="Pete" src={avatarUrl} />
      <Text fontSize="lg">{greeting}</Text>
    </VStack>
    <VStack>
      <Heading >{bio1}</Heading>
      <Heading >{ bio2 }</Heading>
    </VStack>

    {/* ////////// */}


    

  </FullScreenSection>
);

export default LandingSection;
