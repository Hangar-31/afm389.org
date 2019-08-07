/** @jsx jsx */
import { css, jsx } from "@emotion/core";

// Config
import _config from "../../_config";

// Components
import {
  H31Text2,
  H31LayoutContainer,
  H31LayoutRow,
  H31LayoutCol,
  H31Link5,
  H31Title2D
} from "..";

export default () => (
  <H31LayoutContainer
    fluid
    as="section"
    css={css`
      padding-top: 100px !important;
      padding-bottom: 100px !important;
      background-color: ${_config.colorPrimary};
    `}
  >
    <H31LayoutRow>
      <H31LayoutCol md={3} />
      <H31LayoutCol md={6}>
        <div>
          <H31Title2D
            as="h2"
            css={css`
              margin-bottom: 30px;
              color: ${_config.colorWhite};
            `}
          >
            Your Path To A Musical Career
            <br />
            <span
              css={css`
                color: ${_config.colorSecondary};
              `}
            >
              Starts
            </span>
            &nbsp;
            <span
              css={css`
                color: ${_config.colorTertiary};
              `}
            >
              Here
            </span>
          </H31Title2D>
        </div>

        <H31Text2
          css={css`
            margin-bottom: 30px;
          `}
        >
          Are you ready to become a member of the largest organization in the
          world representing the interests of musicians?
        </H31Text2>

        <div
          css={css`
            display: flex;
            justify-content: flex-end;
          `}
        >
          <H31Link5 href="https://members.afm.org/join/step1/c/en_US">
            Join Now
          </H31Link5>
        </div>
      </H31LayoutCol>
      <H31LayoutCol md={3} />
    </H31LayoutRow>
  </H31LayoutContainer>
);
