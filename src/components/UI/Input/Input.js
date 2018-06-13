import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import classes from "./Input.scss";

const Input = props => {
  let inputElement = null;

  let showErrorMessage = false;
  if (
    props.changed &&
    props.invalid &&
    props.shouldValidate &&
    props.elementType !== "checkbox"
  ) {
    showErrorMessage = true;
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={classes.TextInput}
          onChange={props.inputChanged}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;

    case "checkbox":
      inputElement = (
        <label className={classes.CheckBoxLabel}>
          <input
            className={classes.CheckBox}
            {...props.elementConfig}
            onChange={props.inputChanged}
            checked={props.checked}
          />
          <span className={classes.CustomCheckBox} />
          I accept the <a href="/#">terms and conditions</a>
        </label>
      );
      break;

    default:
      inputElement = (
        <input
          className={classes.FormTextInput}
          onChange={props.inputChanged}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }

  let showField = true;
  if (props.label === "Company Name" || props.elementType === "checkbox") {
    showField = !props.existingUser;
  }

  let companyId = null;
  if (props.label === "Company Name") {
    companyId = props.value
      .trim()
      .replace(/\s/g, "-")
      .toLowerCase();
  }

  return (
    <Aux>
      {showField ? (
        <div className={classes.InputWrapper}>
          <label className={classes.Label}>{props.label}</label>
          {inputElement}
          {props.label === "Company Name" ? (
            <p className={classes.CompanyID}>
              Your database ID:{" "}
              <span className={classes.Highlighted}>{companyId}</span>
            </p>
          ) : null}
          {showErrorMessage ? (
            <p className={classes.ErrorMessage}>
              Please enter a valid {props.elementConfig.type}
            </p>
          ) : null}
          {props.checkBoxError && !props.changed ? (
            <p className={classes.CheckBoxErrorMessage}>
              You must accept the terms and conditions
            </p>
          ) : null}
        </div>
      ) : null}
    </Aux>
  );
};

export default Input;
