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
      @media (max-width: 575px) {
        padding-top: 45px !important;
        padding-bottom: 45px !important;
      }
    `}
  >
    <H31LayoutRow>
      <H31LayoutCol xs={1} md={3} />
      <H31LayoutCol xs={10} md={6}>
        <div>
          <H31Title2D
            as="h2"
            css={css`
              margin-bottom: 30px;
              color: ${_config.colorWhite};
              @media (max-width: 575px) {
                margin-bottom: 15px;
                text-align: center;
              }
            `}
          >
            Your Path To A Musical Career
            <br />
            <span
              css={css`
                color: ${_config.colorSecondary};
                font-size: inherit;
                @media (max-width: 575px) {
                  font-size: 3.825rem;
                }
              `}
            >
              Starts
            </span>
            &nbsp;
            <span
              css={css`
                color: ${_config.colorTertiary};
                font-size: inherit;
                @media (max-width: 575px) {
                  font-size: 3.825rem;
                }
              `}
            >
              Here
            </span>
          </H31Title2D>
        </div>

        <H31Text2
          css={css`
            margin-bottom: 30px;
            @media (max-width: 575px) {
              margin-left: auto;
              margin-right: auto;
              max-width: 275px;
              text-align: center;
            }
          `}
        >
          Are you ready to become a member of the largest organization in the
          world representing the interests of musicians?
        </H31Text2>

        <div
          css={css`
            display: flex;
            justify-content: flex-end;
            @media (max-width: 575px) {
              justify-content: center;
            }
          `}
        >
          <H31Link5
            css={css`
              @media (max-width: 1369px) {
                font-size: 1rem;
              }
              @media(max-width: 1099px) {
                padding 15px;
                font-size: 0.875rem;
              }
              @media (max-width: 575px) {
                font-size: 1.125rem;
                padding: 15px 30px;
              }
            `}
            href="https://members.afm.org/join/step1/c/en_US"
          >
            Join Now
          </H31Link5>
        </div>
      </H31LayoutCol>
      <H31LayoutCol xs={1} md={3} />
    </H31LayoutRow>
  </H31LayoutContainer>
);
