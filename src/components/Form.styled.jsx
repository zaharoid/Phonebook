import styled from '@emotion/styled';
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 220px;
  border: solid 3px #84c7df;
  padding: 15px;
  border-radius: 5px;

  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 768px) {
    gap: 20px;
    width: 275px;
    padding: 15px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: 'Montserrat', sans-serif;

  text-align: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Input = styled.input`
  background-image: linear-gradient(#20aee3, #20aee3),
    linear-gradient(#bfbfbf, #bfbfbf);
  border: 0 none;
  border-radius: 0;
  box-shadow: none;
  float: none;
  background-color: transparent;
  background-position: center bottom, center calc(100% - 1px);
  background-repeat: no-repeat;
  background-size: 0 2px, 100% 1px;
  padding: 0;
  padding-left: 10px;
  transition: background 0s ease-out 0s;
  color: #979797;
  min-height: 35px;
  display: initial;
  width: 100%;
  outline: none;
  font-size: 15px;
  &:focus {
    background-size: 100% 2px, 100% 1px;
    outline: 0 none;
    transition-duration: 0.3s;
    color: #111;
  }
`;

export const Button = styled.button`
  text-decoration: none;
  display: flex;
  gap: 10px;
  margin-left: auto;
  margin-right: auto;

  width: 220px;
  height: 42.5px;
  line-height: 35px;
  border-radius: 45px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Montserrat', sans-serif;
  font-size: 9px;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  letter-spacing: 3px;
  font-weight: 400;
  color: #524f4e;
  background: var(--milk-white);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &:hover {
    background: #17a6db;
    box-shadow: 0 10px 15px rgba(120, 164, 231, 0.4);
    color: var(--milk-white);
    transform: translateY(-2px);
    cursor: pointer;
  }
  &:disabled {
    background: var(--milk-white);
    color: #524f4e;
    :hover {
      background: var(--button-disabled);
      box-shadow: none;
      color: var(--milk-white);
      transform: none;
      cursor: not-allowed;
      box-shadow: 0 10px 15px rgba(250, 133, 16, 0.4);
    }
  }
`;
