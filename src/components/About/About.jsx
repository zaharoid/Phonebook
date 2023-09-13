import { Info, InfoWrapper, Scroll, Scroller } from './About.styled';

const About = () => {
  return (
    <InfoWrapper>
      <Scroll>
        <Scroller>
          <Info>
            {' '}
            Greetings, buddy. With this app you can store your contacts so you
            don't have to memorize them by heart :). You don't have to worry
            about the privacy of your data, only you can see your contacts, if
            it's your first time here, go to the registration page and fill out
            the form, if you have your own contacts, just log in.
          </Info>
          <Info>
            {' '}
            Greetings, buddy. With this app you can store your contacts so you
            don't have to memorize them by heart :). You don't have to worry
            about the privacy of your data, only you can see your contacts, if
            it's your first time here, go to the registration page and fill out
            the form, if you have your own contacts, just log in.
          </Info>
        </Scroller>
      </Scroll>
    </InfoWrapper>
  );
};

export default About;
