/* eslint-disable import/named */
import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled/macro";
import { Link } from "gatsby";
import Img from "gatsby-image";

// Config
// import _config from "../../_config";

// Components
import { H31SimpleTime, H31Title3B, H31Text3 } from "..";

// Styled Components
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
  border: none;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  color: initial;
  text-decoration: none;
  background-color: #ffffff;

  &:hover {
    text-decoration: none;
  }
`;

function BlogCard2({ article }) {
  return (
    <Container
      css={css`
        height: ${article.date ? "420px" : "350px"};
      `}
      to={article.link}
    >
      <ImageContainer>
        <Img alt={article.title} fluid={article.image} />
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
}

BlogCard2.defaultProps = {
  article: {
    image: {},
    title: "title",
    text: "text",
    link: "link",
    linkText: "link text",
    date: "date",
  },
};

BlogCard2.propTypes = {
  article: PropTypes.shape({
    image: PropTypes.object,
    title: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string,
    linkText: PropTypes.string,
    date: PropTypes.string,
  }),
};

export default BlogCard2;
