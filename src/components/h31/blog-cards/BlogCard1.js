import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { H31SimpleTime } from "..";

const OrangeOverlay = styled.section`
  z-index: 1;
  position: absolute;
  opacity: 0;
  height: 100%;
  width: 100%;
  background-color: orange;
  transition: 0.2s;
`;

const OrangeOverlayContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const OrangeTitle = styled.div`
  margin-top: 190px;
`;

const OrangeUnderlinedText = styled.div`
  margin-top: 25px;
  text-decoration: underline;
`;

const ImageContainer = styled.div`
  height: 45%;
  width: 100%;
  object-fit: cover;
  background-color: black;
  transition: 0.5s;
  > .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
  }
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

const DateContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 10%;
  font-size: 1.3em;
`;

const Container = styled(Link)`
  text-decoration: none;
  color: initial;

  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0px;
  width: 330px;
  height: 420px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: none;
  overflow: hidden;
  &:hover {
    pointer: cursor;
    background-color: orange;
    opacity: 0.75;
    ${OrangeOverlay} {
      opacity: 0.8;
    }
    ${ImageContainer} {
      position: absolute;
      height: 100%;
      width: 100%;
    }
    ${InfoContainer}, ${TitleContainer}, ${ParagraphContainer}, ${DateContainer} {
      opacity: 0;
    }
  }
`;

const BlogCard1 = ({
  ImageComponent,
  TitleComponent,
  TextComponent1,
  TextComponent2,
  titleColor
}) => (
  <Container>
    <OrangeOverlay>
      <OrangeOverlayContent>
        <OrangeTitle>{TitleComponent}</OrangeTitle>
        <OrangeUnderlinedText>{TitleComponent}</OrangeUnderlinedText>
      </OrangeOverlayContent>
    </OrangeOverlay>

    <ImageContainer>{ImageComponent}</ImageContainer>

    <InfoContainer>
      <TitleContainer
        css={css`
          color: ${titleColor};
        `}
      >
        {TitleComponent}
      </TitleContainer>

      <ParagraphContainer>{TextComponent1}</ParagraphContainer>
    </InfoContainer>

    <DateContainer>
      <H31SimpleTime TextComponent={TextComponent2} />
    </DateContainer>
  </Container>
);

BlogCard1.defaultProps = {
  // handleClick: () => console.log("BlogCard1"),
  titleColor: "#595959",
  ImageComponent: <img alt="" src="https://placeimg.com/1000/1000/any" />,
  TitleComponent: <h3>Title 3</h3>,
  TextComponent1: (
    <p>
      Consectetur veniam et nisi do culpa non. Elit eiusmod anim ipsum est ex
      nisi id occaecat adipisicing occaecat exercitation velit occaecat. Aliquip
      labore qui nisi velit anim quis incididunt adipisicing ipsum dolore qui
      cillum fugiat.
    </p>
  ),
  TextComponent2: "May 20, 2019"
};

BlogCard1.propTypes = {
  // handleClick: PropTypes.func,
  titleColor: PropTypes.string,
  ImageComponent: PropTypes.element,
  TitleComponent: PropTypes.element,
  TextComponent1: PropTypes.element,
  TextComponent2: PropTypes.element
};

export default BlogCard1;
