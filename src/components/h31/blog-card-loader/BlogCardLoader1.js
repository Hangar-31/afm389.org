import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";

// Components
import {
  H31LayoutContainer,
  H31LayoutRow,
  H31LayoutCol,
  H31BlogCard1,
  H31Button1
} from "..";

// Config
import _config from "../../_config";

export default class BlogCardLoader1 extends React.Component {
  constructor() {
    super();

    this.state = {
      loadAmount: 7
    };

    this.onClickLoadMore = this.onClickLoadMore.bind(this);
  }

  onClickLoadMore() {
    let { loadAmount } = this.state;
    loadAmount += 8;
    this.setState({ loadAmount });
  }

  render() {
    const { articles } = this.props;
    const { loadAmount } = this.state;

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
              <H31LayoutCol md={3}>
                <H31BlogCard1 article={article} />
              </H31LayoutCol>

              {i + 1 === loadAmount && (
                <H31LayoutCol
                  css={css`
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  `}
                  md={3}
                >
                  <H31Button1
                    css={css`
                      padding: 15px 20px;
                      border: 1px solid ${_config.colorTertiary};
                      &:hover {
                        border-color: ${_config.colorTertiary};
                      }
                    `}
                    onClick={this.onClickLoadMore}
                  >
                    More Stories
                  </H31Button1>
                </H31LayoutCol>
              )}

              {(i + 1) % 4 === 0 && i + 1 !== articles.length && (
                <H31LayoutCol md={12}>
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
  }
}

BlogCardLoader1.defaultProps = {
  articles: []
};

BlogCardLoader1.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object)
};
