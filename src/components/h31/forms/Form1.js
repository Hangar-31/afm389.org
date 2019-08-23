/* eslint-disable no-undef */
import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import {
  H31LoadingIndicator1,
  H31Label1,
  H31Input1,
  H31Button3,
  H31ButtonBrightSubmit,
  H31Select1,
  H31Textarea1,
  H31LayoutCol,
  H31LayoutRow,
  H31LayoutContainer,
  H31Error1
} from "../index";
import _config from "../../_config";

const Form = styled.form``;

const Required = (
  <span
    css={css`
      position: absolute;
      top: -17px;
      left: 0;
      color: ${_config.colorLightGrey};
      font-size: 0.625rem;
    `}
  >
    * Required
  </span>
);

const Required2 = (
  <span
    css={css`
      position: absolute;
      top: -17px;
      left: 15px;
      color: ${_config.colorLightGrey};
      font-size: 0.625rem;
    `}
  >
    * Required
  </span>
);

// Encode Function for Data
function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default class Form1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Subject: "Website Contact Form",
      Regarding: "",
      FirstName: "",
      LastName: "",
      Email: "",
      City: "",
      State: "",
      Message: "",
      errors: [],
      submitting: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    const { target } = e;

    this.setState({ [target.name]: target.value });
  }

  validate() {
    const formLength = this.formEl.length;
    const errors = [];

    if (this.formEl.checkValidity() === false) {
      for (let i = 0; i < formLength; i += 1) {
        const elem = this.formEl[i];

        if (elem.nodeName.toLowerCase() === "select") {
          if (!elem.validity.valid || elem.value === elem[0].value) {
            errors.push(`Error on field ${elem.name}: Please select a value.`);
          }
        } else if (elem.nodeName.toLowerCase() !== "button") {
          if (!elem.validity.valid) {
            errors.push(
              `Error on field ${elem.name}: ${elem.validationMessage}`
            );
          }
        }
      }

      this.setState({ errors });
      return false;
    }
    this.setState(errors);
    return true;
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ submitting: 1 });

    if (this.validate()) {
      const form = e.target;
      const data = { ...this.state };

      delete data.errors;
      delete data.submitting;
      delete data.Submit;

      fetch("/send", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...data
        })
      })
        .then(() => {
          this.setState({ submitting: 2 });
        })
        .catch(() => {
          this.validate();
          this.setState({ submitting: 0 });
        });
    } else {
      this.setState({ submitting: 0 });
    }
  }

  render() {
    return (
      <Form
        ref={form => {
          this.formEl = form;
        }}
        onSubmit={this.onSubmit}
        name={this.props.formName}
        noValidate
        netlify
        netlify-honeypot="bot-field"
      >
        <H31LayoutContainer fluid>
          {this.state.errors.length > 0 && (
            <H31LayoutRow>
              <ul
                css={css`
                  color: red;
                  margin-bottom: 30px;
                `}
              >
                {this.state.errors.map(error => (
                  <H31LayoutCol md={12}>
                    <li key={error}>
                      <H31Error1>{error}</H31Error1>
                    </li>
                  </H31LayoutCol>
                ))}
              </ul>
            </H31LayoutRow>
          )}

          <H31LayoutRow
            css={css`
              @media (max-width: 767px) {
                padding-bottom: 30px;
              }
            `}
          >
            <H31LayoutCol
              css={css`
                padding-left: 0 !important;
                padding-right: 0 !important;
              `}
              md={6}
            >
              <H31LayoutContainer
                css={css`
                  @media (max-width: 767px) {
                    padding: 0 !important;
                  }
                `}
                fluid
              >
                <H31LayoutRow>
                  {/* Reason */}

                  <H31LayoutCol
                    xs={12}
                    css={css`
                      padding-left: 0 !important;
                      margin-bottom: 25px;
                      @media (max-width: 767px) {
                        padding-left: 15px !important;
                      }
                    `}
                  >
                    <H31Label1 htmlFor="Regarding">
                      {Required}
                      <H31Select1
                        onChange={this.handleChange}
                        required
                        name="Regarding"
                        defaultValue="I would like to inquire about..."
                      >
                        <option value="I would like to inquire about...">
                          I would like to inquire about...
                        </option>
                        <option value="Joining CFMA">Joining CFMA</option>
                        <option value="Career Coaching">Career Coaching</option>
                        <option value="Audition and Giggin Questions">
                          Audition and Giggin Questions
                        </option>
                        <option value="Questions About Benefits">
                          Questions About Benefits
                        </option>
                        <option value="Question About Member Log In">
                          Question About Member Log In
                        </option>
                        <option value="Others">Others</option>
                      </H31Select1>
                    </H31Label1>
                  </H31LayoutCol>

                  {/* First Name */}

                  <H31LayoutCol
                    xs={6}
                    css={css`
                      padding-left: 0 !important;
                      margin-bottom: 25px;
                      @media (max-width: 767px) {
                        padding-left: 15px !important;
                      }
                    `}
                  >
                    <H31Label1 htmlFor="FirstName">
                      {Required}
                      <H31Input1
                        id="FirstName"
                        onChange={this.handleChange}
                        name="FirstName"
                        placeholder="First Name"
                        type="text"
                        required
                      />
                    </H31Label1>
                  </H31LayoutCol>

                  {/* Last Name */}

                  <H31LayoutCol
                    xs={6}
                    css={css`
                      padding-left: 0 !important;
                      margin-bottom: 25px;
                      @media (max-width: 767px) {
                        padding-left: 15px !important;
                      }
                    `}
                  >
                    <H31Label1 htmlFor="LastName">
                      {Required}
                      <H31Input1
                        id="LastName"
                        onChange={this.handleChange}
                        name="LastName"
                        placeholder="Last Name"
                        type="text"
                        required
                      />
                    </H31Label1>
                  </H31LayoutCol>

                  {/* Email */}

                  <H31LayoutCol
                    xs={12}
                    css={css`
                      padding-left: 0 !important;
                      margin-bottom: 25px;
                      @media (max-width: 767px) {
                        padding-left: 15px !important;
                      }
                    `}
                  >
                    <H31Label1 htmlFor="Email">
                      {Required}
                      <H31Input1
                        id="Email"
                        onChange={this.handleChange}
                        name="Email"
                        placeholder="Email Address"
                        type="email"
                        required
                      />
                    </H31Label1>
                  </H31LayoutCol>

                  {/* City */}

                  <H31LayoutCol
                    xs={8}
                    sm={9}
                    css={css`
                      padding-left: 0 !important;
                      margin-bottom: 25px;
                      @media (max-width: 767px) {
                        padding-left: 15px !important;
                      }
                    `}
                  >
                    <H31Label1 htmlFor="City">
                      {Required}
                      <H31Input1
                        id="City"
                        onChange={this.handleChange}
                        name="City"
                        placeholder="City"
                        type="text"
                        required
                      />
                    </H31Label1>
                  </H31LayoutCol>

                  {/* State */}

                  <H31LayoutCol
                    xs={4}
                    sm={3}
                    css={css`
                      padding-left: 0 !important;
                      margin-bottom: 25px;
                      @media (max-width: 767px) {
                        padding-left: 15px !important;
                      }
                    `}
                  >
                    <H31Label1 htmlFor="State">
                      {Required}
                      <H31Input1
                        id="State"
                        onChange={this.handleChange}
                        name="State"
                        placeholder="State"
                        type="text"
                        required
                      />
                    </H31Label1>
                  </H31LayoutCol>
                </H31LayoutRow>
              </H31LayoutContainer>
            </H31LayoutCol>

            <H31LayoutCol
              css={css`
                padding-left: 0 !important;
                padding-right: 0 !important;
              `}
              md={6}
            >
              <H31LayoutContainer
                css={css`
                  height: 100%;
                  @media (max-width: 767px) {
                    padding: 0 !important;
                  }
                `}
                fluid
              >
                <H31LayoutRow
                  css={css`
                    flex-flow: column;
                    height: 100%;
                  `}
                >
                  {/* Messages */}

                  <H31LayoutCol
                    xs={12}
                    css={css`
                      height: calc(100% - 76px);
                      padding-right: 0 !important;
                      margin-bottom: 25px;
                      flex: none !important;
                      @media (max-width: 767px) {
                        padding-right: 15px !important;
                        height: 150px;
                      }
                    `}
                  >
                    <H31Textarea1
                      id="Message"
                      onChange={this.handleChange}
                      name="Message"
                      placeholder="Message"
                      required
                    />
                    {Required2}
                  </H31LayoutCol>

                  {/* Submit Button */}

                  <H31LayoutCol
                    xs={12}
                    css={css`
                      height: 26px;
                      padding-right: 0 !important;
                      flex: none !important;
                      @media (max-width: 767px) {
                        padding-right: 15px !important;
                      }
                    `}
                  >
                    <H31ButtonBrightSubmit
                      type="submit"
                      css={css`
                  ${
                    this.state.submitting === 2
                      ? `background: ${_config.colorSecondary};`
                      : ``
                  }
                  ${
                    this.state.submitting === 2
                      ? `border: 1px solid ${_config.colorWhite};`
                      : ``
                  }
                  ${this.state.submitting === 2 ? "pointer-events: none;" : ""}
                `}
                    >
                      <H31Button3
                        css={css`
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          font-size: 0.75rem;
                        `}
                      >
                        {this.state.submitting === 0 && "Send"}
                        {this.state.submitting === 1 && (
                          <H31LoadingIndicator1 />
                        )}
                        {this.state.submitting === 2 && "Sent"}
                      </H31Button3>
                    </H31ButtonBrightSubmit>
                  </H31LayoutCol>
                </H31LayoutRow>
              </H31LayoutContainer>
            </H31LayoutCol>

            <H31Label1
              htmlFor="bot-field"
              css={css`
                display: none;
              `}
            >
              If you are human don&#39;t fill this form out
              <input name="bot-field" onChange={this.onChange} />
            </H31Label1>
          </H31LayoutRow>
        </H31LayoutContainer>
      </Form>
    );
  }
}
