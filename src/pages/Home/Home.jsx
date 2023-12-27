import { Container } from './Home.styled';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Box
        sx={{
          textTransform: 'capitalize',
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: 'h3.fontSize',
          marginBottom: '32px',
        }}
      >
        Welcome to your Phonebook!
      </Box>
      <Box
        sx={{
          textAlign: 'center',
          fontSize: 'h4.fontSize',
          fontStyle: 'italic',
        }}
      >
        Keeping your contacts organized is now easier than ever!
      </Box>
    </Container>
  );
};

export default Home;
