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
  H31Title1B,
  H31Link5
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
          <H31Title1B
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
          </H31Title1B>
        </div>

        <H31Text2
          css={css`
            margin-bottom: 30px;
          `}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          dictum ullamcorper nulla iaculis pretium. Donec eros massa,
          sollicitudin sit amet condimentum cursus, cursus ut ante. Vivamus
          interdum lectus sit amet varius mattis.
        </H31Text2>

        <div
          css={css`
            text-align: right;
          `}
        >
          <H31Link5 href="">Join Now</H31Link5>
        </div>
      </H31LayoutCol>
      <H31LayoutCol md={3} />
    </H31LayoutRow>
  </H31LayoutContainer>
);
