import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { H31SimpleTime } from "..";

const Overlay = styled.section`
  z-index: 1;
  position: absolute;
  opacity: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  transition: 0.2s;
`;

const OverlayTitle = styled.div`
  width: 100%;
  margin-bottom: 30px;
  text-align: center;
  > * {
    color: #ffffff;
    text-decoration: none;
  }
`;

const Group = styled.div``;

const ImageContainer = styled.div`
  height: 45%;
  width: 100%;
  transition: 0.5s;
  > .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
  }
`;

const ContentContainer = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  padding: 15px 30px;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 15px;
`;

const DateContainer = styled.div`
  margin-left: -15px;
`;

const Container = styled(Link)`
  text-decoration: none;
  color: initial;

  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0px;
  max-width: 330px;
  height: 420px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: none;
  overflow: hidden;
  &:hover {
    pointer: cursor;
    opacity: 0.75;
    ${Overlay} {
      opacity: 1;
    }
    ${ImageContainer} {
      position: absolute;
      height: 100%;
      width: 100%;
    }
    ${ContentContainer}, ${TitleContainer}, ${DateContainer} {
      opacity: 0;
    }
  }
`;

const BlogCard1 = ({
  overlayColor,
  ImageComponent,
  TitleComponent1,
  TitleComponent2,
  TitleComponent3,
  TextComponent1,
  TextComponent2
}) => (
  <Container
    css={css`
      &:hover {
        ${Overlay} {
          background-color: ${overlayColor};
        }
      }
    `}
  >
    <Overlay>
      <Group>
        <OverlayTitle>{TitleComponent2}</OverlayTitle>
        {TitleComponent3}
      </Group>
    </Overlay>

    <ImageContainer>{ImageComponent}</ImageContainer>

    <ContentContainer>
      <Group>
        <TitleContainer>{TitleComponent1}</TitleContainer>
        {TextComponent1}
      </Group>

      <DateContainer>
        <H31SimpleTime TextComponent={TextComponent2} />
      </DateContainer>
    </ContentContainer>
  </Container>
);

BlogCard1.defaultProps = {
  // handleClick: () => console.log("BlogCard1"),
  overlayColor: "#595959",
  ImageComponent: <img alt="" src="https://placeimg.com/1000/1000/any" />,
  TitleComponent1: <h3>Title 3</h3>,
  TitleComponent2: <h3>Overlay Title 3</h3>,
  TitleComponent3: <h4>Overlay Title 4</h4>,
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
  overlayColor: PropTypes.string,
  ImageComponent: PropTypes.element,
  TitleComponent1: PropTypes.element,
  TitleComponent2: PropTypes.element,
  TitleComponent3: PropTypes.element,
  TextComponent1: PropTypes.element,
  TextComponent2: PropTypes.element
};

export default BlogCard1;
