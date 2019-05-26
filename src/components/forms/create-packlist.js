import React from "react";
import { reduxForm, Field, focus, FieldArray } from "redux-form";
import Input from "./input";
import { required } from "./validators";
import { postPackList } from "../../redux/actions";
import DatePicker from "react-widgets/lib/DateTimePicker";
import momentLocalizer from "react-widgets-moment";
import moment from "moment";
import "../App.css";
import "../calendar/calendar.css";

momentLocalizer(moment);

export class CreatePackListForm extends React.Component {
  onSubmit(values, dispatch) {
    return dispatch(postPackList(values));
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
          <span className="bree-font">Add Item</span>
        </i>
        <ul className=".item-fields-flex" style={stylePadding}>
          {fields.map((pack, index) => (
            <li key={index}>
              <Field
                name={`${pack}.pack_item`}
                type="text"
                component={renderField}
              />{" "}
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

    const datePicker = ({ input: { onChange, value }, showTime }) => (
      <DatePicker
        onChange={onChange}
        format="DD MMM YYYY"
        time={showTime}
        value={!value ? null : new Date(value)}
      />
    );

    return (
      <form
        className="add-form"
        onSubmit={this.props.handleSubmit((values, dispatch) =>
          this.onSubmit(values, dispatch)
        )}
      >

        <label htmlFor="title">Trip title</label>
        <Field
          name="title"
          type="text"
          component={Input}
          validate={[required]}
        />

        <label htmlFor="date_leave">Leave date</label>
        <Field
          name="date_leave"
          showTime={false}
          component={datePicker}
          validate={[required]}
        />

        <label htmlFor="date_return">Return date</label>
        <Field
          name="date_return"
          showTime={false}
          component={datePicker}
          validate={[required]}
        />

        <FieldArray name="pack" component={renderItem} />

        <button
          style={styleButton}
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Save Packing List
        </button>
      </form>
    );
  }
}



export default reduxForm({
  form: "_packList",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("contact", Object.keys(errors)[0]))
})(CreatePackListForm);