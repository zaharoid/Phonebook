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
  width: 350px;
  margin-top: 25px;
`;

export const FormLabel = styled(Label)`
  margin-bottom: 30px;
  gap: 0;
`;
export const Container = styled.div`
  margin-top: 70px;
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
