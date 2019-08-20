import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";

// Config
// import _config from "../../_config";

// Components
import { H31SimpleTime, H31Title3B, H31Title4A, H31Text3 } from "..";

// Styled Components
const Overlay = styled.section`
  z-index: 1;
  position: absolute;
  opacity: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 100%;
  transition: 0.2s;
`;

// const OverlayTitle = styled.div`
//   width: 100%;
//   margin-bottom: 30px;
//   text-align: center;
//   > * {
//     color: #ffffff;
//     text-decoration: none;
//   }
// `;

const OverlayClick = styled.div`
  width: 100%;
  text-align: center;
`;

// const Group = styled.div``;

const ContentGroup = styled.div`
  overflow: hidden;
  height: 150px;
`;
const ImageContainer = styled.div`
  height: 50%;
  width: 100%;
  transition: 0.5s;
  > .gatsby-image-wrapper,
  > img {
    height: 100%;
    width: 100%;
  }
`;

const ContentContainer = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
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
  display: block;
  position: relative;
  padding: 0px;
  width: 100%;
  max-width: 500px;
  border: none;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  color: initial;
  text-decoration: none;
  background-color: #ffffff;
  &:hover {
    text-decoration: none !important;
    pointer: cursor;
    ${Overlay} {
      opacity: 1;
    }
  }
`;

const BlogCard1 = ({ article }) => (
  <Container
    css={css`
      height: ${article.date ? "420px" : "350px"};
      &:hover {
        ${Overlay} {
          background-color: rgba(243, 149, 8, 0.84);
        }
      }
    `}
    to={article.link}
  >
    <Overlay>
      <OverlayClick>
        <H31Title4A>{article.linkText}</H31Title4A>
      </OverlayClick>
    </Overlay>

    <ImageContainer>
      {typeof article.image === "string" && (
        <img alt={article.title} src={article.image} />
      )}
      {typeof article.image !== "string" && article.image}
    </ImageContainer>

    <ContentContainer
      css={css`
        height: ${article.date ? "163px" : "100%"};
        padding: ${article.date ? "15px 30px 0 30px;" : "15px 30px;"};
      `}
    >
      <ContentGroup>
        <TitleContainer>
          <H31Title3B>{article.title}</H31Title3B>
        </TitleContainer>
        <H31Text3
          css={css`
            @media (max-width: 575px) {
              font-size: 1rem;
            }
          `}
        >
          {article.text}
        </H31Text3>
      </ContentGroup>
    </ContentContainer>
    {article.date && (
      <DateContainer>
        <H31SimpleTime date={article.date} />
      </DateContainer>
    )}
  </Container>
);

BlogCard1.defaultProps = {
  article: {
    image: <img alt="" src="https://placeimg.com/1000/1000/any" />,
    title: <h3>Title 3</h3>,
    text: (
      <p>
        Consectetur veniam et nisi do culpa non. Elit eiusmod anim ipsum est ex
        nisi id occaecat adipisicing occaecat exercitation velit occaecat.
        Aliquip labore qui nisi velit anim quis incididunt adipisicing ipsum
        dolore qui cillum fugiat.
      </p>
    ),
    link: <h4>Overlay Title 4</h4>,
    linkText: <h4>Overlay Title 4</h4>,
    date: null
  }
};

BlogCard1.propTypes = {
  article: PropTypes.objectOf(PropTypes.object)
};

export default BlogCard1;
