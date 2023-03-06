import { Button, Box } from './More.styled';

function ButtonMore({ loadMoreClick }) {
  return (
    <Box>
      <Button onClick={() => loadMoreClick()}>Load morte</Button>
    </Box>
  );
}

export default ButtonMore;
