import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { H31SimpleTime, H31Title3B, H31Title4A, H31Text3 } from "..";

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

const OverlayClick = styled.div`
  width: 100%;
  text-align: center;
`;

const Group = styled.div``;

const ContentGroup = styled.div`
  overflow: hidden;
  min-height: 170px;
`;
const ImageContainer = styled.div`
  height: 50%;
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
  overflow: hidden;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 15px;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Container = styled(Link)`
  text-decoration: none;
  color: initial;

  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 0px;
  width: 100%;
  height: 420px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: none;
  overflow: hidden;
  &:hover {
    pointer: cursor;
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
  title,
  text,
  link,
  linkText,
  date
}) => (
  <Container
    css={css`
      height: ${date ? "420px" : "350px"};
      &:hover {
        ${Overlay} {
          background-color: ${overlayColor};
        }
      }
    `}
    to={link}
  >
    <Overlay>
      <Group>
        <OverlayTitle>
          <H31Title3B>{title}</H31Title3B>
        </OverlayTitle>
        <OverlayClick>
          <H31Title4A>{linkText}</H31Title4A>
        </OverlayClick>
      </Group>
    </Overlay>

    <ImageContainer>{ImageComponent}</ImageContainer>

    <ContentContainer>
      <ContentGroup>
        <TitleContainer>
          <H31Title3B>{title}</H31Title3B>
        </TitleContainer>
        <H31Text3>{text}</H31Text3>
      </ContentGroup>
    </ContentContainer>
    {date && (
      <DateContainer>
        <H31SimpleTime date={date} />
      </DateContainer>
    )}
  </Container>
);

BlogCard1.defaultProps = {
  // handleClick: () => console.log("BlogCard1"),
  overlayColor: "#595959",
  ImageComponent: <img alt="" src="https://placeimg.com/1000/1000/any" />,
  title: <h3>Title 3</h3>,
  text: (
    <p>
      Consectetur veniam et nisi do culpa non. Elit eiusmod anim ipsum est ex
      nisi id occaecat adipisicing occaecat exercitation velit occaecat. Aliquip
      labore qui nisi velit anim quis incididunt adipisicing ipsum dolore qui
      cillum fugiat.
    </p>
  ),
  link: <h4>Overlay Title 4</h4>,
  linkText: <h4>Overlay Title 4</h4>,
  date: null
};

BlogCard1.propTypes = {
  // handleClick: PropTypes.func,
  overlayColor: PropTypes.string,
  ImageComponent: PropTypes.element,
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
  date: PropTypes.string
};

export default BlogCard1;
