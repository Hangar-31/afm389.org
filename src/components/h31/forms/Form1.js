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
  H31Textarea1
} from "../index";
import _config from "../../_config";

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`;

const Column = styled.div`
  display: grid;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  grid-auto-columns: 1fr;
  grid-auto-rows: 30px;
  grid-gap: 30px;
`;

const Required = (
  <span
    css={css`
      position: absolute;
      top: -17px;
      left: 0;
      color: ${_config.colorLightGrey};
      font-size: 0.675rem;
    `}
  >
    * Required
  </span>
);

const formData = [
  {
    type: "select",
    name: "Regarding",
    text: "Select What This Inquiry is About",
    options: ["Work Enquiry", "Joining CFMA"],
    size: 6,
    required: true
  },
  {
    type: "text",
    name: "FirstName",
    text: "First Name",
    size: 3,
    required: true
  },
  {
    type: "text",
    name: "LastName",
    text: "Last Name",
    size: 3,
    required: true
  },
  {
    type: "text",
    name: "Email",
    text: "Email Address",
    size: 6,
    required: true
  },
  {
    type: "text",
    name: "City",
    text: "City",
    size: 4,
    required: true
  },
  {
    type: "text",
    name: "State",
    text: "State",
    size: 2,
    required: true
  },
  {
    type: "textbox",
    name: "Message",
    text: "Message",
    size: 6,
    required: true
  },
  {
    type: "button",
    text: "SEND",
    size: 6
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
    this.state = {
      Subject: "Website Contact Form",
      FName: "",
      LName: "",
      Email: "",
      Message: "",

      errors: [],
      submitting: 0
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    const { target } = e;

    if (target.value.length > 0) {
      if (target.nextSibling.style.color.length > 0) {
        target.nextSibling.removeAttribute("style");
      }
      if (target.localName === "input") {
        target.nextSibling.style.top = "3px";
        target.nextSibling.style.fontSize = "0.725em";
      }
      if (target.localName === "textarea") {
        target.nextSibling.style.top = "3px";
        target.nextSibling.style.fontSize = "0.725em";
      }
    } else {
      target.nextSibling.removeAttribute("style");
    }

    this.setState({ [target.name]: target.value });
  }

  validate() {
    const formLength = this.formEl.length;
    const errors = [];

    if (this.formEl.checkValidity() === false) {
      for (let i = 0; i < formLength; i += 1) {
        const elem = this.formEl[i];
        if (elem.nodeName.toLowerCase() !== "button") {
          if (!elem.validity.valid) {
            errors.push(
              `Error on field ${elem.previousSibling.innerHTML}: ${elem.validationMessage}`
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
            <H31Label1
              key={data.name}
              htmlFor={data.name}
              css={css`
                grid-column: span ${data.size};
              `}
            >
              {data.required && Required}
              <H31Input1 id={data.name} placeholder={data.text} type="text" />
            </H31Label1>
          );
          break;
        case "select":
          this.formLeft.push(
            <H31Label1
              key={data.name}
              htmlFor={data.name}
              css={css`
                grid-column: span ${data.size};
              `}
            >
              {data.required && Required}
              <H31Select1 defaultValue={data.options[0]}>
                <option
                  value=""
                  css={css`
                    color: #eeeeee;
                  `}
                  disabled
                >
                  {data.text}
                </option>
                {data.options.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </H31Select1>
            </H31Label1>
          );
          break;
        case "textbox":
          this.formRight.push(
            <div
              key={data.name}
              css={css`
                position: relative;
                grid-column: span ${data.size};
                grid-row: span 3;
              `}
            >
              <H31Textarea1 id={data.name} placeholder={data.text} />
              {data.required && Required}
            </div>
          );
          break;
        case "button":
          this.formRight.push(
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
                    ? `border: 1px solid ${_config.colorSecondary};`
                    : ``
                }
                grid-column: span ${data.size};
                grid-row: span 1;
              `}
            >
              <H31Button3>
                {this.state.submitting === 0 && "Send"}
                {this.state.submitting === 1 && <H31LoadingIndicator1 />}
                {this.state.submitting === 2 && "Sent"}
              </H31Button3>
            </H31ButtonBrightSubmit>
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
          this.setState({ submitting: 1 });
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
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        {this.state.errors.length > 0 && (
          <ul
            css={css`
              grid-column: span 2;
            `}
          >
            {this.state.errors.map(error => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        <Column>{this.formLeft}</Column>

        <Column>{this.formRight}</Column>

        <H31Label1
          htmlFor="BotMessage"
          css={css`
            display: none;
          `}
        >
          If you are human don&#39;t fill this form out
          <input name="bot-field" onChange={this.onChange} required />
        </H31Label1>
      </Form>
    );
  }
}