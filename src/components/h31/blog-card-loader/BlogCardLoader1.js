/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import { StaticQuery, graphql } from "gatsby";

// Components
import {
  H31LayoutContainer,
  H31LayoutRow,
  H31LayoutCol,
  H31BlogCard1,
  H31Button1,
} from "..";

// Config
import _config from "../../_config";

export default class BlogCardLoader1 extends React.Component {
  constructor() {
    super();

    this.state = {
      loadAmount: 7,
    };

    this.onClickLoadMore = this.onClickLoadMore.bind(this);
  }

  onClickLoadMore() {
    let { loadAmount } = this.state;
    loadAmount += 8;
    this.setState({ loadAmount });
  }

  render() {
    const { loadAmount } = this.state;

    return (
      <StaticQuery
        query={graphql`
          query BlogCardLoader1 {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
            ) {
              edges {
                node {
                  frontmatter {
                    image {
                      childImageSharp {
                        fluid(maxWidth: 500) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                    date
                    title
                  }
                  fileAbsolutePath
                  excerpt(pruneLength: 90)
                  fields {
                    path
                  }
                }
              }
            }
          }
        `}
        render={(data) => {
          const articles = data.allMarkdownRemark.edges
            .map((article) => article.node)
            .filter((article) =>
              article.fileAbsolutePath.includes("static/news-and-articles")
            )
            .map((article) => {
              const newArticle = {
                image: article.frontmatter.image.childImageSharp.fluid,
                title: article.frontmatter.title,
                text: article.excerpt,
                date: article.frontmatter.date,
                link: article.fields.path,
                linkText: "Read More",
              };
              return newArticle;
            });
          return (
            <H31LayoutContainer
              css={css`
                margin: 60px 0 150px 0;
              `}
              fluid
              as="section"
            >
              <H31LayoutRow>
                {articles.slice(0, loadAmount).map((article, i) => (
                  <>
                    <H31LayoutCol
                      css={css`
                        margin-bottom: 30px;
                        @media (max-width: 575px) {
                          margin-bottom: 15px;
                      `}
                      xs={12}
                      sm={6}
                      md={4}
                      xl={3}
                    >
                      <H31BlogCard1 article={article} />
                    </H31LayoutCol>

                    {i + 1 === loadAmount && (
                      <H31LayoutCol
                        css={css`
                          display: flex;
                          align-items: center;
                          justify-content: center;
                        `}
                        xs={12}
                        sm={6}
                        md={4}
                        xl={3}
                      >
                        <H31Button1
                          css={css`
                            padding: 15px 20px;
                            border: 1px solid ${_config.colorTertiary};
                            &:hover {
                              border-color: ${_config.colorTertiary};
                            }
                          `}
                          name={`click to scroll the view of articles to position ${
                            i + 1
                          }`}
                          onClick={this.onClickLoadMore}
                        >
                          More Stories
                        </H31Button1>
                      </H31LayoutCol>
                    )}

                    {(i + 1) % 4 === 0 && i + 1 !== articles.length && (
                      <H31LayoutCol xs={12}>
                        <div
                          css={css`
                            width: 100%;
                            height: 1px;
                            margin: 30px 0;
                            background-color: ${_config.colorLightGrey};
                          `}
                        />
                      </H31LayoutCol>
                    )}
                  </>
                ))}
              </H31LayoutRow>
            </H31LayoutContainer>
          );
        }}
      />
    );
  }
}
