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
  H31Error1
} from "../index";
import _config from "../../_config";

const Form = styled.form``;

// const Required = (
//   <span
//     css={css`
//       position: absolute;
//       top: -17px;
//       left: 0;
//       color: ${_config.colorLightGrey};
//       font-size: 0.625rem;
//     `}
//   >
//     * Required
//   </span>
// );

// const Required2 = (
//   <span
//     css={css`
//       position: absolute;
//       top: -17px;
//       left: 15px;
//       color: ${_config.colorLightGrey};
//       font-size: 0.625rem;
//     `}
//   >
//     * Required
//   </span>
// );

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
        name="Footer Form"
        noValidate
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="Footer Form" />

        <ul
          css={css`
            color: red;
            margin-bottom: 30px;
          `}
        >
          {this.state.errors.map(error => (
            <li key={error}>
              <H31Error1>{error}</H31Error1>
            </li>
          ))}
        </ul>

        {/* Regarding */}

        <H31Label1 htmlFor="Regarding">
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

        {/* First Name */}

        <H31Label1 htmlFor="FirstName">
          <H31Input1
            required
            id="FirstName"
            onChange={this.handleChange}
            placeholder="First Name"
            type="text"
            name="FirstName"
            value={this.state.FirstName}
          />
        </H31Label1>

        {/* Last Name */}
        <H31Label1 htmlFor="LastName">
          <H31Input1
            required
            id="LastName"
            onChange={this.handleChange}
            placeholder="Last Name"
            type="text"
            name="LastName"
            value={this.state.LastName}
          />
        </H31Label1>

        {/* Email */}
        <H31Label1 htmlFor="Email">
          <H31Input1
            required
            id="Email"
            onChange={this.handleChange}
            placeholder="Email Address"
            type="email"
            name="Email"
            value={this.state.Email}
          />
        </H31Label1>

        {/* City */}
        <H31Label1 htmlFor="City">
          <H31Input1
            required
            id="City"
            onChange={this.handleChange}
            placeholder="City"
            type="text"
            name="City"
            value={this.state.City}
          />
        </H31Label1>

        {/* State */}
        <H31Label1 htmlFor="State">
          <H31Input1
            required
            id="State"
            onChange={this.handleChange}
            placeholder="State"
            type="text"
            name="State"
            value={this.state.State}
          />
        </H31Label1>

        {/* Messages */}
        <H31Textarea1
          required
          id="Message"
          onChange={this.handleChange}
          placeholder="Message"
          name="Message"
          value={this.state.Message}
        />

        {/* Submit Button */}
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
                        ${
                          this.state.submitting === 2
                            ? "pointer-events: none;"
                            : ""
                        }
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

        <H31Label1
          htmlFor="bot-field"
          css={css`
            display: none;
          `}
        >
          If you are human don&#39;t fill this form out
          <input name="bot-field" onChange={this.onChange} />
        </H31Label1>
      </Form>
    );
  }
}
