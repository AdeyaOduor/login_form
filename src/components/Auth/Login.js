import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Message } from "semantic-ui-react";
import Layout from ".Auth/Layout";

class Login extends Component {
  render() {
    return (
      <Layout header="Dashboard Log in">
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          placeholder="E-mail address"
          className="auth-input-field"
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          type="password"
          className="auth-input-field"
        />

        <Link to="/dashboard">
          <Button color="teal" fluid size="huge">
            Login
          </Button>
        </Link>

        <Message size="big">
          <Link to="/signup">No Account?</Link>
        </Message>
      </Layout>
    );
  }
}
export default Login;
