import React, {useEffect, useState} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();


  const initialValues = {
    firstName: "", 
    email: "",
    type: "hireMe",
    comment: ""
  };

  const onSubmit = (values) => {
    submit("#", values);
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required !!"),
    email: Yup.string().email('Invalid email').required("Required"),
    type: Yup.string(),
    comment: Yup.string().min(2).required("Required")
  });




  useEffect(() => {

    if(response){
      onOpen(response.type, response.message);
      if(response.type === "success"){
        formik.resetForm();
      }
    }

  },[response]);


  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema

  });


  //console.log("Fromik", formik)
  // console.log("Fromik values", formik.values)
  //console.log("Fromik errors", formik.errors)
  // console.log("Fromik fields touched", formik.touched)

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">Contact me</Heading>
        <Box p={6} rounded="md" w="100%">
        
        {/* handle from submit step:4 */}
          <form onSubmit={ formik.handleSubmit} >  
            <VStack spacing={4}>
              {/* <FormControl isInvalid={false}> */}
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"

                // handle from submit step:4  
                  // onChange={formik.handleChange}
                  // onBlur= {formik.handleBlur}
                  // value={formik.values.firstName}
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>Enter your name</FormErrorMessage>
              </FormControl>

              {/* <FormControl isInvalid={false}> */}
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"

                // handle from submit step:4  
                  // onChange={formik.handleChange}
                  // onBlur= {formik.handleBlur}
                  // value={formik.values.email}
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>Enter valid email address</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>

                {/* handle from submit step:4  */}
                <Select id="type" name="type" onChange={formik.handleChange} value={formik.values.type} >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Open source consultancy session</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>

              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>

                {/* handle from submit step:4  */}
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}

                // handle from submit step:4  
                  // onChange={formik.handleChange}
                  // onBlur= {formik.handleBlur}
                  // value={formik.values.comment}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>Write a short note / comment</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" disabled={!formik.isValid || isLoading}>
                { isLoading ? <Spinner color='white.500' /> : "Submit" }
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
