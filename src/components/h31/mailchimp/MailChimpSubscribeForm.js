/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable camelcase */
// eslint-disable-next-line
import React, { Component } from 'react'
import axios from "axios";
// import {
//   Form,
//   FormGroupingFull,
//   FormGroupingHalf,
//   Input,
//   Label,
//   ErrorList,
//   ErrorItem
// } from "../html/Forms";
// import { Button } from "../html/Buttons";
// import { LoadingIndicator } from "../animations/LoadingIndicator";

const server = ""; // Example: us20, us12
const listId = "";
const url = `https://cors-anywhere.herokuapp.com/https://${server}.api.mailchimp.com/3.0/lists/${listId}/members/`;

export default class MailChimpSubscribeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email_address: "",
      status: "subscribed",
      merge_fields: {
        FNAME: "",
        LNAME: "",
      },
      errors: [],
      submitting: 0,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { merge_fields } = this.state;

    if (e.currentTarget.name === "FNAME") {
      merge_fields.FNAME = e.target.value;
      this.setState({ merge_fields });
    } else if (e.currentTarget.name === "LNAME") {
      merge_fields.LNAME = e.target.value;
      this.setState({ merge_fields });
    } else {
      this.setState({ [e.currentTarget.name]: e.target.value });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ submitting: 1 });

    if (this.validate()) {
      const data = { ...this.state };
      delete data.errors;

      axios({
        method: "post",
        headers: {
          authorization: "Basic b0415974a77ec2a1cacad2b498534adf-us20",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        url,
        data: JSON.stringify(data),
        mode: "no-cors",
      })
        .then(() => {
          this.setState({ submitting: 2 });
        })
        .catch(() => {
          this.setState({ submitting: 0 });
        });
    } else {
      this.setState({ submitting: 0 });
    }
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

  render() {
    // const { errors, submitting } = this.state;

    return (
      <>
        {/* <Form
          ref={form => {
            this.formEl = form;
          }}
          onSubmit={this.onSubmit}
          name="Subscribe"
          noValidate
        >
          {errors.length > 0 && (
            <ErrorList>
              {errors.map((error, i) => (
                <ErrorItem key={`${i + error}`}>{error}</ErrorItem>
              ))}
            </ErrorList>
          )}

          <FormGroupingHalf>
            <Label htmlFor="FNAME">First</Label>
            <Input type="text" name="FNAME" onChange={this.onChange} required />
          </FormGroupingHalf>
          <FormGroupingHalf>
            <Label htmlFor="LNAME">Last</Label>
            <Input type="text" name="LNAME" onChange={this.onChange} required />
          </FormGroupingHalf>
          <FormGroupingFull>
            <Label htmlFor="email_address">Email</Label>
            <Input
              type="email"
              name="email_address"
              onChange={this.onChange}
              required
            />
          </FormGroupingFull>
          <FormGroupingFull>
            {submitting === 0 && <Button type="submit">subscribe</Button>}
            {submitting === 1 && (
              <Button type="button">
                <LoadingIndicator />
              </Button>
            )}
            {submitting === 2 && <Button type="button">&#10003;</Button>}
          </FormGroupingFull>
        </Form> */}
      </>
    );
  }
}
