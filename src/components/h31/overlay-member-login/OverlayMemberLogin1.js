import React from "react";
import { css } from "@emotion/react";

// Components
import { H31Link6 } from "../index";
import _config from "../../_config";

export default class Bio1 extends React.Component {
  constructor() {
    super();

    this.state = {
      visible: false,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (e.currentTarget === e.target) {
      e.preventDefault();
      const { visible } = this.state;
      this.setState({ visible: !visible });
    }
  }

  render() {
    return (
      <H31Link6
        href="https://member.afm389.org"
        css={css`
          color: ${_config.colorWhite} !important;
          margin-left: 30px;
          cursor: pointer;
          &:hover {
            color: ${_config.colorTertiary} !important;
          }
          @media (max-width: 1370px) {
            margin-left: 15px;
          }
          @media (max-width: 991px) {
            font-size: 0.875rem;
            padding: 10px 20px;
          }
          @media (max-width: 767px) {
            font-size: 0.75rem;
            padding: 10px 20px;
          }
          @media (max-width: 575px) {
            font-size: 0.675rem;
            padding: 10px 20px;
          }
        `}
      >
        Member Log In
      </H31Link6>
    );
  }
}
