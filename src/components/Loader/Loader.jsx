import { Oval } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderContainer>
      <Oval
        height={80}
        width={80}
        color="#1882e4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#1768b4"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </LoaderContainer>
  );
}
