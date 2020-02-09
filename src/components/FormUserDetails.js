import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props; //=this.props.values
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="FirstName"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
            styles={styles.TextField}
          />
          <br />
          <TextField
            hintText="Enter Your Last Name"
            floatingLabelText="LastName"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            hintText="Enter Your E-mail"
            floatingLabelText="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />

          <RaisedButton
            label="Continue"
            primary={true}
            styles={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;
