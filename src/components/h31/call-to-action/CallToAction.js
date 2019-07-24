import PropTypes from "prop-types";
/** @jsx jsx */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 120px 0;
`;

const TextContainer = styled.div`
  line-height: 1.25em;
  padding: 5px 0px 10px 0px;
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const CallToAction = ({
  backgroundColor,
  TitleComponent,
  TextComponent,
  ButtonComponent
}) => (
  <Container
    css={css`
      background-color: ${backgroundColor};
    `}
  >
    <Wrapper>
      <div>{TitleComponent}</div>

      <TextContainer>{TextComponent}</TextContainer>

      <ButtonContainer>{ButtonComponent}</ButtonContainer>
    </Wrapper>
  </Container>
);

CallToAction.defaultProps = {
  backgroundColor: "transparent",
  TitleComponent: <h2>This Title is a Test</h2>,
  TextComponent: (
    <p>
      Sed ac neque ac sem iaculis commodo. Aenean accumsan in neque non tempus.
      Aenean euismod metus leo, at euismod libero pharetra eu. Cras ultrices
      imperdiet tortor. Sed mollis eros id arcu auctor, sit amet posuere arcu
      facilisis. Aliquam et euismod neque, in rhoncus lectus. Aenean euismod
      metus leo, at euismod libero pharetra eu. Cras ultrices imperdiet tortor.
      Aenean euismod metus leo, at euismod libero pharetra eu. Cras ultrices
      imperdiet tortor.
    </p>
  ),
  ButtonComponent: <button type="button">Button</button>
};

CallToAction.propTypes = {
  backgroundColor: PropTypes.string,
  TitleComponent: PropTypes.element,
  TextComponent: PropTypes.element,
  ButtonComponent: PropTypes.element
};

export default CallToAction;
