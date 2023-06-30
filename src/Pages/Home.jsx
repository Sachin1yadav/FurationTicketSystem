import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
 
 
import { Link } from "react-router-dom";
import AllTickets from "./AllTickets";
const Home =()=> {
   
  return (
    <Box  >
      
      <Heading mt={16}  textAlign={"start"} size={"2xl"}>
        Book Your Bus Tickets
      </Heading>
      
      <Image   margin={"auto"} height={400} src="https://s3.rdbuz.com/web/images/homeV2/AboutUs/rydePop.svg" alt="" />
        <Link to="/alltickets">
        <Button colorScheme='teal' variant='outline' marginTop={"20px"} >Check For Tickets</Button>
        </Link>
      {/* <Image marginTop={"20px"}   src="https://platforms.makemytrip.com/contents/9b482a30-8da2-4116-8009-36fddfdd075b" alt=""/> */}
     
     
       
    </Box>
  );
}

export default  Home