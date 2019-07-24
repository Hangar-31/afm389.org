import PropTypes from "prop-types";
/** @jsx jsx */
import styled from "@emotion/styled";
import { jsx } from "@emotion/core";

const BigContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const ParagraphContainer = styled.div`
  line-height: 1.25em;
  padding: 5px 0px 10px 0px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CallToAction = ({ TitleComponent, TextComponent, ButtonComponent }) => (
  <BigContainer>
    <div>{TitleComponent}</div>

    <ParagraphContainer>{TextComponent}</ParagraphContainer>

    <ButtonContainer>{ButtonComponent}</ButtonContainer>
  </BigContainer>
);

CallToAction.defaultProps = {
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
  TitleComponent: PropTypes.element,
  TextComponent: PropTypes.element,
  ButtonComponent: PropTypes.element
};

export default CallToAction;
