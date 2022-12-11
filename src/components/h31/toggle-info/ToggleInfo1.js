/** @jsx jsx */
import React from "react";
import { PropTypes } from "prop-types";
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled/macro";

// Components
import {
  H31Button1,
  H31Title2B,
  H31Text3,
  H31LayoutCol,
  H31LayoutRow,
  H31LayoutContainer,
} from "../index";
import _config from "../../_config";

const ParagraphWrapper = styled.div``;

export default class Bio1 extends React.Component {
  constructor() {
    super();

    this.state = {
      visible: false,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  }

  render() {
    const { name, info } = this.props;
    return (
      <H31LayoutContainer
        fluid
        as="section"
        css={css`
          position: relative;
          margin: 0;
          padding: 0px !important;
          &::after {
            position: absolute;
            display: block;
            right: 0;
            left: 0;
            bottom: 0;
            margin: 0 auto;
            content: "";
            height: 1px;
            background-color: #dadada;
            max-width: 930px;
            @media (max-width: 1440px) {
              width: calc(66.66% - 30px);
            }
            @media (max-width: 1200px) {
              width: calc(83.33% - 30px);
            }
          }
        `}
      >
        <H31LayoutRow
          css={css`
            min-height: 60px;
            padding: 10px 0;
            @media (max-width: 575px) {
              padding: 5px 0;
              min-height: 30px;
            }
          `}
        >
          <H31LayoutCol xs={1} xl={2} />

          <H31LayoutCol
            xs={8}
            xl={6}
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <H31Title2B
              css={css`
                color: ${_config.colorBlack};
              `}
            >
              {name}
            </H31Title2B>
          </H31LayoutCol>

          <H31LayoutCol
            xs={2}
            xl={2}
            css={css`
              display: block;
              align-items: center;
              text-align: right;
            `}
          >
            {this.props.info.length > 0 && (
              <H31Button1
                css={css`
                  width: 45px;
                  height: 45px;
                  border: 1px solid
                    ${this.state.visible
                      ? _config.colorTertiary
                      : _config.colorWhite};
                  background-color: ${this.state.visible
                    ? _config.colorWhite
                    : _config.colorTertiary};
                  font-size: 1.5rem;
                  color: ${this.state.visible
                    ? _config.colorTertiary
                    : _config.colorWhite};
                  @media (max-width: 767px) {
                    width: 30px;
                    height: 30px;
                    font-size: 1rem;
                  }
                  @media (max-width: 575px) {
                    width: 25px;
                    height: 25px;
                    font-size: 0.875rem;
                  }
                `}
                onClick={this.onClick}
              >
                {!this.state.visible && "+"}
                {this.state.visible && "-"}
              </H31Button1>
            )}
            {this.props.info.length === 0 && (
              <div
                css={css`
                  @media (max-width: 575px) {
                    width: 25px;
                    height: 25px;
                  }
                `}
              />
            )}
          </H31LayoutCol>

          <H31LayoutCol xs={1} xl={2} />
        </H31LayoutRow>

        <H31LayoutRow>
          <H31LayoutCol xs={1} xl={3} />

          <H31LayoutCol
            xs={10}
            xl={6}
            css={css`
              max-height: ${this.state.visible
                ? `${this.bioContainer.scrollHeight}px`
                : "0px"};
              overflow: hidden;
              transition: 0.2s;
            `}
          >
            <ParagraphWrapper
              ref={(bioContainer) => {
                this.bioContainer = bioContainer;
              }}
            >
              {info.map((text) => (
                <H31Text3
                  css={css`
                    padding-bottom: 15px;
                  `}
                  key={text}
                >
                  {text}
                </H31Text3>
              ))}
            </ParagraphWrapper>
          </H31LayoutCol>

          <H31LayoutCol xs={1} xl={3} />
        </H31LayoutRow>
      </H31LayoutContainer>
    );
  }
}

Bio1.defaultProps = {
  name: "JohnDoe@Gmail.com",
  info: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed leo id orci tincidunt blandit vel ut eros. Nunc iaculis eleifend nisi, sit amet sagittis ex tempus a. Morbi efficitur tortor at leo iaculis malesuada. Sed vehicula, nunc eget hendrerit venenatis, metus eros sollicitudin purus, vitae interdum felis diam eu erat. Suspendisse congue diam risus, ut aliquet erat volutpat sit amet. Suspendisse at dignissim ex. Aenean mollis, elit non pretium efficitur, arcu magna porta leo, ac porta massa enim ac nunc. Integer a ligula pellentesque lectus auctor ultrices.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed leo id orci tincidunt blandit vel ut eros. Nunc iaculis eleifend nisi, sit amet sagittis ex tempus a. Morbi efficitur tortor at leo iaculis malesuada. Sed vehicula, nunc eget hendrerit venenatis, metus eros sollicitudin purus, vitae interdum felis diam eu erat. Suspendisse congue diam risus, ut aliquet erat volutpat sit amet. Suspendisse at dignissim ex. Aenean mollis, elit non pretium efficitur, arcu magna porta leo, ac porta massa enim ac nunc. Integer a ligula pellentesque lectus auctor ultrices.",
  ],
};

Bio1.propTypes = {
  name: PropTypes.string,
  info: PropTypes.arrayOf(PropTypes.string),
};
