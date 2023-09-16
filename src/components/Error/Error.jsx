import sadCat from 'Images/sadCat.jpg';
import { ErrorWrapper, Alert } from './Error.styled';
import { Link } from 'components/Navigation/Navigation';

const Error = () => {
  return (
    <ErrorWrapper>
      <Alert>Oops, your contacts are unavailable, try again later.</Alert>
      <img src={sadCat} width="300" alt="cat" />
      <p>
        <Link to={'/'}>Back to home</Link>
      </p>
    </ErrorWrapper>
  );
};

export default Error;
