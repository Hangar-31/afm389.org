import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 420px;
  &:hover {
    background-color: orange;
    opacity: 0.75;
  }
`;

const ImageContainer = styled.div`
  height: 45%;
  width: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 45%;
  width: 100%;
`;

const TitleContainer = styled.div`
  text-decoration: underline;
  padding: 0px 20px;
  margin-top: -5px;
  margin-bottom: -5px;
`;

const ParagraphContainer = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.5em;
  font-size: 0.9em;
  padding: 0px 36px;
  height: 100%;
  margin-top: -25px;
  margin-bottom: -10px;
`;

const MomentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 10%;
`;

const BlogpostCard = ({ TitleComponent, ParagraphComponent, TitleColor }) => (
  <Container>
    <ImageContainer />

    <InfoContainer>
      <TitleContainer
        css={css`
          color: ${TitleColor};
        `}
      >
        {TitleComponent}
      </TitleContainer>

      <ParagraphContainer>{ParagraphComponent}</ParagraphContainer>
    </InfoContainer>

    <MomentContainer />
  </Container>
);

BlogpostCard.defaultProps = {
  TitleComponent: <h3>2019 Disney Open Call Auditions</h3>,
  ParagraphComponent: (
    <p>
      Consectetur veniam et nisi do culpa non. Elit eiusmod anim ipsum est ex
      nisi id occaecat adipisicing occaecat exercitation velit occaecat. Aliquip
      labore qui nisi velit anim quis incididunt adipisicing ipsum dolore qui
      cillum fugiat.
    </p>
  ),
  TitleColor: "#595959"
};

BlogpostCard.propTypes = {
  TitleComponent: PropTypes.element,
  ParagraphComponent: PropTypes.element,
  TitleColor: PropTypes.string
};

export default BlogpostCard;
