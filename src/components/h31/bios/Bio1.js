import React from "react";
import { PropTypes } from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

// Images
import ImgBioMikeAvila from "../../images/bios/ImgBioMikeAvila";

// Components
import Container from "../layouts/LayoutContainer";
import Row from "../layouts/LayoutRow";
import Col from "../layouts/LayoutCol";
import { H31Button1, H31Link3, H31Title2B, H31Text3 } from "../index";
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
    const { name, email, bios } = this.props;
    return (
      <Container
        css={css`
          margin: 30px 0;
        `}
      >
        <Row>
          <Col xs={2}>
            <ImgBioMikeAvila />
          </Col>
          <Col xs={8}>
            <H31Title2B
              css={css`
                color: ${_config.colorBlack};
              `}
            >
              {name}
            </H31Title2B>
            <H31Link3 href={`mailto::${email}`}>{email}</H31Link3>
            <Container
              css={css`
                border-top: 1px solid ${_config.colorLightGrey};
              `}
            >
              <Row>
                <Col
                  xs={10}
                  css={css`
                    max-height: ${this.state.visible
                      ? `${this.bioContainer.scrollHeight}px`
                      : "81px"};
                    overflow: hidden;
                    transition: 0.2s;
                    padding-left: 0 !important;
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
                </Col>
                <Col
                  xs={2}
                  css={css`
                    padding-right: 0 !important;
                  `}
                >
                  <H31Button1
                    css={css`
                      border-color: ${this.state.visible
                        ? _config.colorTertiary
                        : _config.colorWhite};
                      background-color: ${this.state.visible
                        ? _config.colorWhite
                        : _config.colorTertiary};
                      color: ${this.state.visible
                        ? _config.colorTertiary
                        : _config.colorWhite};
                    `}
                    onClick={this.onClick}
                  >
                    Full Bio
                  </H31Button1>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

Bio1.defaultProps = {
  name: "John Doe",
  email: "JohnDoe@Gmail.com",
  bios: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed leo id orci tincidunt blandit vel ut eros. Nunc iaculis eleifend nisi, sit amet sagittis ex tempus a. Morbi efficitur tortor at leo iaculis malesuada. Sed vehicula, nunc eget hendrerit venenatis, metus eros sollicitudin purus, vitae interdum felis diam eu erat. Suspendisse congue diam risus, ut aliquet erat volutpat sit amet. Suspendisse at dignissim ex. Aenean mollis, elit non pretium efficitur, arcu magna porta leo, ac porta massa enim ac nunc. Integer a ligula pellentesque lectus auctor ultrices.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed leo id orci tincidunt blandit vel ut eros. Nunc iaculis eleifend nisi, sit amet sagittis ex tempus a. Morbi efficitur tortor at leo iaculis malesuada. Sed vehicula, nunc eget hendrerit venenatis, metus eros sollicitudin purus, vitae interdum felis diam eu erat. Suspendisse congue diam risus, ut aliquet erat volutpat sit amet. Suspendisse at dignissim ex. Aenean mollis, elit non pretium efficitur, arcu magna porta leo, ac porta massa enim ac nunc. Integer a ligula pellentesque lectus auctor ultrices."
  ]
};

Bio1.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  bios: PropTypes.arrayOf(PropTypes.string)
};
