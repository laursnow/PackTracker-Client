import React from "react";
import "../App.css";
import { reduxForm, Field, FieldArray } from "redux-form";

export class AddListItemForm extends React.Component {
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
          <span className="bree-font">Add Item</span>
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
    return (
      <form
        className="edit-form"
        onSubmit={this.props.handleSubmit((values, dispatch) =>
          this.onSubmit(values, dispatch)
        )}
      >
        <FieldArray name="pack" component={renderItem} />

        <button
          style={styleButton}
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          {" "}
          Add New Items
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "_toUpdateList",
  onSubmitFail: (errors, dispatch) => dispatch(Object.keys(errors)[0])
})(AddListItemForm);
