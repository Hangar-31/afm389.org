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

const formData = [
  {
    type: "select",
    name: "Regarding",
    text: "I would like to inquire about...",
    options: [
      "I would like to inquire about...",
      "Joining CFMA",
      "Career Coaching",
      "Audition and Giggin Questions",
      "Questions About Benefits",
      "Question About Member Log In",
      "Others"
    ],
    sizeXs: 12,
    sizeSm: 12,
    sizeMd: 12,
    sizeLg: 12,
    required: true
  },
  {
    type: "text",
    name: "FirstName",
    text: "First Name",
    sizeXs: 6,
    sizeSm: 6,
    sizeMd: 6,
    sizeLg: 6,
    required: true
  },
  {
    type: "text",
    name: "LastName",
    text: "Last Name",
    sizeXs: 6,
    sizeSm: 6,
    sizeMd: 6,
    sizeLg: 6,
    required: true
  },
  {
    type: "text",
    name: "Email",
    text: "Email Address",
    sizeXs: 12,
    sizeSm: 12,
    sizeMd: 12,
    sizeLg: 12,
    required: true
  },
  {
    type: "text",
    name: "City",
    text: "City",
    sizeXs: 8,
    sizeSm: 9,
    sizeMd: 9,
    sizeLg: 9,
    required: true
  },
  {
    type: "text",
    name: "State",
    text: "State",
    sizeXs: 4,
    sizeSm: 3,
    sizeMd: 3,
    sizeLg: 3,
    required: true
  },
  {
    type: "textbox",
    name: "Message",
    text: "Message",
    sizeXs: 12,
    sizeSm: 12,
    sizeMd: 12,
    sizeLg: 12,
    required: true
  },
  {
    type: "button",
    name: "Submit",
    text: "SEND",
    sizeXs: 12,
    sizeSm: 12,
    sizeMd: 12,
    sizeLg: 12
  }
];

// Encode Function for Data
function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default class Form1 extends React.Component {
  constructor(props) {
    super(props);
    const formFields = [];
    formData.forEach(element => {
      formFields[element.name] = "";
    });

    this.state = {
      Subject: "Website Contact Form",
      ...formFields,
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

  buildForm() {
    this.formLeft = [];
    this.formRight = [];

    formData.forEach(data => {
      switch (data.type) {
        case "text":
          this.formLeft.push(
            <H31LayoutCol
              xs={data.sizeXs}
              sm={data.sizeSm}
              md={data.sizeMd}
              lg={data.sizeLg}
              css={css`
                padding-left: 0 !important;
                margin-bottom: 25px;
                @media (max-width: 767px) {
                  padding-left: 15px !important;
                }
              `}
            >
              <H31Label1 key={data.name} htmlFor={data.name}>
                <H31Input1
                  id={data.name}
                  onChange={this.handleChange}
                  name={data.name}
                  placeholder={data.text}
                  type="text"
                  required={data.required}
                />
                {data.required && Required}
              </H31Label1>
            </H31LayoutCol>
          );
          break;
        case "select":
          this.formLeft.push(
            <H31LayoutCol
              xs={data.sizeXs}
              sm={data.sizeSm}
              md={data.size}
              lg={data.sizeLg}
              css={css`
                padding-left: 0 !important;
                margin-bottom: 25px;
                @media (max-width: 767px) {
                  padding-left: 15px !important;
                }
              `}
            >
              <H31Label1 key={data.name} htmlFor={data.name}>
                <H31Select1
                  onChange={this.handleChange}
                  required={data.required}
                  name={data.name}
                  defaultValue={data.options[0]}
                >
                  {data.options.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </H31Select1>
                {data.required && Required}
              </H31Label1>
            </H31LayoutCol>
          );
          break;
        case "textbox":
          this.formRight.push(
            <H31LayoutCol
              xs={data.sizeXs}
              sm={data.sizeSm}
              md={data.sizeMd}
              lg={data.sizeLg}
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
              key={data.name}
            >
              <H31Textarea1
                id={data.name}
                onChange={this.handleChange}
                name={data.name}
                placeholder={data.text}
                required={data.required}
              />
              {data.required && Required2}
            </H31LayoutCol>
          );
          break;
        case "button":
          this.formRight.push(
            <H31LayoutCol
              xs={data.sizeXs}
              sm={data.sizeSm}
              md={data.sizeMd}
              lg={data.sizeLg}
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
                key={data.type}
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
                  {this.state.submitting === 1 && <H31LoadingIndicator1 />}
                  {this.state.submitting === 2 && "Sent"}
                </H31Button3>
              </H31ButtonBrightSubmit>
            </H31LayoutCol>
          );
          break;
        default:
      }
    });
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

      console.log(data);

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
    this.buildForm();

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
                <H31LayoutRow>{this.formLeft}</H31LayoutRow>
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
                  {this.formRight}
                </H31LayoutRow>
              </H31LayoutContainer>
            </H31LayoutCol>

            <H31Label1
              htmlFor="BotMessage"
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
