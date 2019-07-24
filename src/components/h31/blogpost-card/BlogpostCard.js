import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

import moment from "moment";

const Container = styled.button`
  display: flex;
  flex-direction: column;
  padding: 0px;
  width: 330px;
  height: 420px;
  &:hover {
    pointer: cursor;
    background-color: orange;
    opacity: 0.75;
  }
`;

const ImageContainer = styled.div`
  height: 45%;
  width: 100%;
  object-fit: cover;
  background-color: black;
  opacity: 50%;
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
  margin-top: 5px;
  margin-bottom: -5px;
  font-size: 1.25em;
`;

const ParagraphContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  line-height: 1.5em;
  font-size: 1.15em;
  padding: 0px 36px;
  height: 100%;
  margin-top: -25px;
  margin-bottom: -10px;
`;

const MomentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 10%;
  font-size: 1.3em;
`;

const BlogpostCard = ({
  TitleComponent,
  ParagraphComponent,
  TitleColor,
  Date
}) => (
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

    <MomentContainer>{Date}</MomentContainer>
  </Container>
);

BlogpostCard.defaultProps = {
  // handleClick: () => console.log("BlogpostCard"),
  TitleComponent: <h3>2019 Disney Open Call Auditions</h3>,
  ParagraphComponent: (
    <p>
      Consectetur veniam et nisi do culpa non. Elit eiusmod anim ipsum est ex
      nisi id occaecat adipisicing occaecat exercitation velit occaecat. Aliquip
      labore qui nisi velit anim quis incididunt adipisicing ipsum dolore qui
      cillum fugiat.
    </p>
  ),
  TitleColor: "#595959",
  Date: moment().format("LL")
};

BlogpostCard.propTypes = {
  // handleClick: PropTypes.func,
  TitleComponent: PropTypes.element,
  ParagraphComponent: PropTypes.element,
  TitleColor: PropTypes.string,
  Date: PropTypes.func
};

export default BlogpostCard;
