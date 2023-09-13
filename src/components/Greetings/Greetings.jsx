import {
  GreetingsContainer,
  GreetingsTitle,
  GreetingsText,
  GreetingsEnd,
} from './Greetings.styled';

export default function Greetings() {
  return (
    <GreetingsContainer>
      <GreetingsTitle>Phonebook</GreetingsTitle>
      <GreetingsText>
        Use the app to securely store your contacts and quickly search.
      </GreetingsText>
      <GreetingsEnd>Be always connected with Phonebook.</GreetingsEnd>
    </GreetingsContainer>
  );
}
