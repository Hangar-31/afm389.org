import React from "react";
import { PropTypes } from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

// Components
import Container from "../layouts/LayoutContainer";
import Row from "../layouts/LayoutRow";
import Col from "../layouts/LayoutCol";
import ButtonToggle from "../buttons/ButtonToggle";
import { H31Button1, H31Title2B, H31Text3 } from "../index";
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
    const { name, info } = this.props;
    return (
      <Container
        css={css`
          margin: 0;
          padding: 0px !important;
          border-bottom: 1px solid ${_config.colorLightGrey};
        `}
      >
        <Row
          css={css`
            min-height: 60px;
          `}
        >
          <Col
            xs={11}
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
          </Col>
          <Col
            xs={1}
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            {this.props.info.length > 0 && (
              <ButtonToggle
                css={css`
                  width: 45px;
                  border-color: ${this.state.visible
                    ? _config.colorTertiary
                    : _config.colorWhite};
                  background-color: ${this.state.visible
                    ? _config.colorWhite
                    : _config.colorTertiary};
                `}
                onClick={this.onClick}
              >
                <H31Button1
                  css={css`
                    font-size: 1.5rem;
                    color: ${this.state.visible
                      ? _config.colorTertiary
                      : _config.colorWhite};
                  `}
                >
                  +
                </H31Button1>
              </ButtonToggle>
            )}
            {this.props.info.length === 0 && (
              <div
                css={css`
                  height: 45px;
                  width: 45px;
                `}
              />
            )}
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            css={css`
              max-height: ${this.state.visible
                ? `${this.bioContainer.scrollHeight}px`
                : "0px"};
              overflow: hidden;
              transition: 0.2s;
            `}
          >
            <ParagraphWrapper
              ref={bioContainer => {
                this.bioContainer = bioContainer;
              }}
            >
              {info.map(text => (
                <H31Text3
                  css={css`
                    margin-bottom: 15px;
                  `}
                  key={text}
                >
                  {text}
                </H31Text3>
              ))}
            </ParagraphWrapper>
          </Col>
        </Row>
      </Container>
    );
  }
}

Bio1.defaultProps = {
  name: "JohnDoe@Gmail.com",
  info: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed leo id orci tincidunt blandit vel ut eros. Nunc iaculis eleifend nisi, sit amet sagittis ex tempus a. Morbi efficitur tortor at leo iaculis malesuada. Sed vehicula, nunc eget hendrerit venenatis, metus eros sollicitudin purus, vitae interdum felis diam eu erat. Suspendisse congue diam risus, ut aliquet erat volutpat sit amet. Suspendisse at dignissim ex. Aenean mollis, elit non pretium efficitur, arcu magna porta leo, ac porta massa enim ac nunc. Integer a ligula pellentesque lectus auctor ultrices.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed leo id orci tincidunt blandit vel ut eros. Nunc iaculis eleifend nisi, sit amet sagittis ex tempus a. Morbi efficitur tortor at leo iaculis malesuada. Sed vehicula, nunc eget hendrerit venenatis, metus eros sollicitudin purus, vitae interdum felis diam eu erat. Suspendisse congue diam risus, ut aliquet erat volutpat sit amet. Suspendisse at dignissim ex. Aenean mollis, elit non pretium efficitur, arcu magna porta leo, ac porta massa enim ac nunc. Integer a ligula pellentesque lectus auctor ultrices."
  ]
};

Bio1.propTypes = {
  name: PropTypes.string,
  info: PropTypes.arrayOf(PropTypes.string)
};
