import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


////////
//STEP:1a Header section "icons section" 
  const allSocialIconsLink = socials.map((eachObj, index) => {
    return (
      <a href={eachObj.url} key={ index } target= "_blank">
        <FontAwesomeIcon icon={ eachObj.icon} size="2x" />
      </a>
    );
  })

//STEP:1b Header section "project & contact section"
  const projectAndContactArray = [
    {
      text: "Projects",
      name: "projects"
    },
    {
      text: "Contact Me",
      name: "contactme"
    }
  ];

  const projectsAndContactme = projectAndContactArray.map((eachObj, index) => {
    const url = `#${eachObj.name}-section`;
    return (
      <a key={index}  href={url} name={eachObj.name} onClick={(e) => handleClick(e.target.name)}>{eachObj.text}</a>
    );
  })


////////

//////////////  
//STEP:5
const [scrollStatus, setScrollStatus] = useState({previousValue: 0, status: "UP"});
const boxHeaderRef = useRef(null);

const handleScroll = (e) => {
  //console.log("scrolled");
  // console.log(e);
  // console.log(window.scrollY);
  let currentValue = window.scrollY;
  // console.log("Old:" , scrollStatus.previousValue)
  // console.log("New:", currentValue);
  
  if(scrollStatus.previousValue < currentValue){

    setScrollStatus({previousValue: currentValue, status: "DOWN"});

    // console.log("You are scrolling down")
  } else {
    setScrollStatus({previousValue: currentValue, status: "UP"});
    // console.log("You are scrolling up")
  }

}

useEffect(() => {
  window.addEventListener("scroll", handleScroll);

  //clean-up function
  return() =>{
    window.removeEventListener("scroll", handleScroll);
  }

},[scrollStatus]);

useEffect(() => {
  let translateValue = (scrollStatus.status === "UP") ? "0px" : "-200px";
  boxHeaderRef.current.style.transform = `translateY(${translateValue})`;
}, [scrollStatus])


//////////////




  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}

      //Added transform= {"auto"}
      transform= {"auto"}

      ref= {boxHeaderRef}
      //translateY= { (scrollStatus.status === "UP") ? "0" : "-200px" }

      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
    

      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={8}>
              { allSocialIconsLink }
            </HStack>

          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              { projectsAndContactme }
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
