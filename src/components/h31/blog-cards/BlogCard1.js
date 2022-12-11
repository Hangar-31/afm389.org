/* eslint-disable valid-typeof */
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import PropTypes from "prop-types";
import styled from "@emotion/styled/macro";
import { Link } from "gatsby";
import Img from "gatsby-image";

// Components
import { H31SimpleTime, H31Title3B, H31Title4A, H31Text3 } from "..";

// Styled Components
const Overlay = styled.section`
  z-index: 1;
  position: absolute;
  top: 0;
  opacity: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 205px;
  width: 100%;
  transition: 0.2s;
`;

const OverlayClick = styled.div`
  width: 100%;
  text-align: center;
`;

const ContentGroup = styled.div``;

const ImageContainer = styled.div`
  height: 205px;
  overflow: hidden;
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

const ContainerLink = styled(Link)`
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
`;

const ContainerBlock = styled.article`
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
`;

function BlogCard1({ article, hover }) {
  return (
    <>
      {hover && (
        <ContainerLink
          css={css`
          min-height: ${article.date ? "420px" : "350px"};
          &:hover {
            text-decoration: none !important;
            ${
              hover &&
              `
                pointer: cursor;
                ${Overlay} {
                  opacity: 1;
                  background-color: rgba(243, 149, 8, 0.84);
                }
            `
            }
        `}
          to={article.link}
        >
          <ImageContainer>
            {!React.isValidElement(article.image) && (
              <Img alt={article.title} fluid={article.image} />
            )}
            {React.isValidElement(article.image) && article.image}
            <Overlay>
              <OverlayClick>
                <H31Title4A>{article.linkText}</H31Title4A>
              </OverlayClick>
            </Overlay>
          </ImageContainer>

          <ContentContainer
            css={css`
              min-height: ${article.date ? "163px" : "100%"};
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
        </ContainerLink>
      )}
      {!hover && (
        <ContainerBlock>
          <ImageContainer>
            {!React.isValidElement(article.image) && (
              <Img alt={article.title} fluid={article.image} />
            )}
            {React.isValidElement(article.image) && article.image}
            <Overlay>
              <OverlayClick>
                <H31Title4A>{article.linkText}</H31Title4A>
              </OverlayClick>
            </Overlay>
          </ImageContainer>

          <ContentContainer
            css={css`
              min-height: ${article.date ? "163px" : "100%"};
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
        </ContainerBlock>
      )}
    </>
  );
}

BlogCard1.defaultProps = {
  article: {
    image: {},
    title: "title",
    text: "text",
    link: "link",
    linkText: "link text",
    date: "date",
  },
  hover: true,
};

BlogCard1.propTypes = {
  article: PropTypes.shape({
    image: PropTypes.object,
    title: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string,
    linkText: PropTypes.string,
    date: PropTypes.string,
  }),
  hover: PropTypes.bool,
};

export default BlogCard1;
