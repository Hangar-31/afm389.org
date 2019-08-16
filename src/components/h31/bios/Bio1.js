import React from "react";
import { PropTypes } from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import MediaQuery from "react-responsive";

// Components
import {
  H31Button1,
  H31Title2B,
  H31Text3,
  H31LayoutContainer,
  H31LayoutRow,
  H31LayoutCol,
  H31Text6
} from "../index";
import _config from "../../_config";

const ParagraphWrapper = styled.div``;

export default class Bio1 extends React.Component {
  constructor() {
    super();

    this.state = {
      visible: false
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  }

  render() {
    const { name, title, image, bios } = this.props;
    return (
      <H31LayoutContainer
        fluid
        as="section"
        css={css`
          margin: 30px 0;
        `}
      >
        <H31LayoutRow>
          <H31LayoutCol xs={1} sm={1} />
          <H31LayoutCol xs={3} sm={2}>
            {image}
          </H31LayoutCol>
          <H31LayoutCol xs={7} sm={8}>
            <H31Title2B
              css={css`
                color: ${_config.colorBlack};
              `}
            >
              {name}
            </H31Title2B>
            <H31Text6
              css={css`
                margin-bottom: 5px;
              `}
            >
              {title}
            </H31Text6>
            <H31LayoutContainer
              css={css`
                border-top: 1px solid ${_config.colorLightGrey};
              `}
            >
              <H31LayoutRow
                css={css`
                  @media (max-width: 992px) {
                    padding: 5px 0;
                  }
                `}
              >
                <H31LayoutCol
                  xs={10}
                  css={css`
                    overflow: hidden;
                    transition: 0.2s;
                    padding-left: 0 !important;
                    max-height: ${this.state.visible
                      ? `${this.bioContainer.scrollHeight}px`
                      : "90px"};
                    @media (max-width: 767px) {
                      max-height: ${this.state.visible
                        ? `${this.bioContainer.scrollHeight}px`
                        : "65px"};
                    }
                    @media (max-width: 575px) {
                      max-height: ${this.state.visible
                        ? `${this.bioContainer.scrollHeight}px`
                        : "74px"};
                    }
                  `}
                >
                  <ParagraphWrapper
                    ref={bioContainer => {
                      this.bioContainer = bioContainer;
                    }}
                  >
                    {bios.map(bio => (
                      <H31Text3
                        css={css`
                          margin-bottom: 15px;
                        `}
                        key={bio}
                      >
                        {bio}
                      </H31Text3>
                    ))}
                  </ParagraphWrapper>
                </H31LayoutCol>
                <H31LayoutCol
                  xs={2}
                  css={css`
                    display: flex;
                    justify-content: flex-end;
                    padding-right: 0 !important;
                  `}
                >
                  <H31Button1
                    css={css`
                      height: 40px;
                      border: ${this.state.visible
                        ? `1px solid ${_config.colorTertiary}`
                        : `1px solid ${_config.colorWhite}`};
                      background-color: ${this.state.visible
                        ? _config.colorWhite
                        : _config.colorTertiary};
                      color: ${this.state.visible
                        ? _config.colorTertiary
                        : _config.colorWhite};

                      @media (max-width: 992px) {
                        font-size: 1.375rem;
                        width: 45px;
                        width: 45px;
                      }
                      @media (max-width: 768px) {
                        font-size: 1.125rem;
                        height: 35px;
                        width: 35px;
                      }
                      @media (max-width: 576px) {
                        font-size: 0.825rem;
                        height: 25px;
                        width: 25px;
                      }
                    `}
                    onClick={this.onClick}
                  >
                    <MediaQuery query="(min-width: 992px)">
                      {!this.state.visible && "Full Bio"}
                      {this.state.visible && "Hide Bio"}
                    </MediaQuery>
                    <MediaQuery query="(max-width: 991px)">
                      {!this.state.visible && "+"}
                      {this.state.visible && "-"}
                    </MediaQuery>
                  </H31Button1>
                </H31LayoutCol>
              </H31LayoutRow>
            </H31LayoutContainer>
          </H31LayoutCol>

          <H31LayoutCol xs={1} sm={2} />
        </H31LayoutRow>
      </H31LayoutContainer>
    );
  }
}

Bio1.defaultProps = {
  name: "John Doe",
  title: "President",
  image: <img alt="" src="https://via.placeholder.com/500" />,
  bios: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed leo id orci tincidunt blandit vel ut eros. Nunc iaculis eleifend nisi, sit amet sagittis ex tempus a. Morbi efficitur tortor at leo iaculis malesuada. Sed vehicula, nunc eget hendrerit venenatis, metus eros sollicitudin purus, vitae interdum felis diam eu erat. Suspendisse congue diam risus, ut aliquet erat volutpat sit amet. Suspendisse at dignissim ex. Aenean mollis, elit non pretium efficitur, arcu magna porta leo, ac porta massa enim ac nunc. Integer a ligula pellentesque lectus auctor ultrices.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed leo id orci tincidunt blandit vel ut eros. Nunc iaculis eleifend nisi, sit amet sagittis ex tempus a. Morbi efficitur tortor at leo iaculis malesuada. Sed vehicula, nunc eget hendrerit venenatis, metus eros sollicitudin purus, vitae interdum felis diam eu erat. Suspendisse congue diam risus, ut aliquet erat volutpat sit amet. Suspendisse at dignissim ex. Aenean mollis, elit non pretium efficitur, arcu magna porta leo, ac porta massa enim ac nunc. Integer a ligula pellentesque lectus auctor ultrices."
  ]
};

Bio1.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.element,
  bios: PropTypes.arrayOf(PropTypes.string)
};
