import { Box, Container } from "@mui/material";
import AppHeader from "../components/AppHeader";

const Home: React.FC = () => {
  return (
    <Box>
      <AppHeader title={"Home"}/>
      <Container aria-label="main-content" disableGutters>
        {/**
         * Put whatever I think should go on the homepage here
         */}
      </Container>
    </Box>
  )
};

export default Home;