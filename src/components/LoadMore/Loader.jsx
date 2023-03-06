import { RotatingLines } from 'react-loader-spinner';
import { Box } from './More.styled';

const Loader = () => {
  return (
    <Box>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
      />
    </Box>
  );
};

export default Loader;
