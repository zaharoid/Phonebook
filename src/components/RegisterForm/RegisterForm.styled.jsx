import styled from '@emotion/styled';
import { FormWrapper, Label, Input, Button } from 'components/Form.styled';
import { Title1 } from 'components/App/App.styled';

export const UserInput = styled(Input)`
  &:active {
    color: #fff;
  }
  &:focus {
    color: #fff;
  }
`;
export const UserBtn = styled(Button)``;

export const FormTitle1 = styled(Title1)`
  color: var(--milk-white);
`;

export const FormContainer = styled(FormWrapper)`
  @media only screen and (min-width: 320px) {
    width: 270px;
    margin-top: 10px;
  }
  @media only screen and (min-width: 768px) {
    width: 350px;
    margin-top: 25px;
  }
`;

export const FormLabel = styled(Label)`
  margin-bottom: 30px;
  gap: 0;
`;
export const Container = styled.div`
  margin-top: 30px;
  @media only screen and (min-width: 768px) {
    margin-top: 70px;
  }
`;
export const Span = styled.span`
  display: block;
  width: 100px;
  margin: 0 auto;
  color: var(--milk-white);
  border-bottom: solid 0.2px #5f5e5f;
  padding-bottom: 3px;
`;

// #20aee3
