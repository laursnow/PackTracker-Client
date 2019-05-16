import React from "react";
import "../App.css";
import { add } from "../../redux/actions";
import { reduxForm, Field, FieldArray } from "redux-form";

export class AddListItemForm extends React.Component {
  onSubmit(values, dispatch) {
    return dispatch(add(values));
  }

  render() {
    const styleButton = {
      fontSize: "16px",
      textAlign: "center"
    };

    const stylePadding = {
      paddingTop: "10px"
    };

    const renderField = ({ input, label, type, meta: { touched, error } }) => (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} type={type} placeholder={label} />
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    );

    const renderItem = ({ fields, meta: { error } }) => (
      <div>
        <i className="fas fa-plus item-fields" onClick={() => fields.push({})}>
          <span
            className="bree-font"
            style={{ color: "black", fontSize: "20px" }}
          >
            Add Item
          </span>
        </i>
        <ul className=".item-fields-flex" style={stylePadding}>
          {fields.map((pack, index) => (
            <li key={index}>
              <Field
                name={`${pack}.pack_item`}
                type="text"
                component={renderField}
              />
              <i
                className="fas fa-trash"
                onClick={() => fields.remove(index)}
              />
            </li>
          ))}
          {error && <li className="error">{error}</li>}
        </ul>
      </div>
    );
    let successMessage;
    if (this.props.submitSucceeded) {
      successMessage = (
        <div className="message message-success">Items added!</div>
      );
    }

    let errorMessage;
    if (this.props.error) {
      errorMessage = (
        <div className="message message-error">{this.props.error}</div>
      );
    }
    return (
      <form
        className="edit-form"
        onSubmit={this.props.handleSubmit((values, dispatch) =>
          this.onSubmit(values, dispatch)
        )}
      >
        {successMessage}
        {errorMessage}

        <FieldArray name="pack" component={renderItem} />

        <button
          style={styleButton}
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Add New Items
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "_toUpdateList"
  // onSubmitFail: (errors, dispatch) => dispatch(Object.keys(errors)[0])
})(AddListItemForm);