import React from "react";
import { reduxForm, Field, focus } from "redux-form";
import Input from "./input";
import ImageInput from "./image-input"
import { required, nonEmpty } from "./validators";
import { postItem } from "../../redux/actions/";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
import momentLocalizer from "react-widgets-moment";
import moment from 'moment';
import "../App.css";

momentLocalizer(moment);

export class CreateLodgingForm extends React.Component {
    onSubmit(values, dispatch) {
      console.log('lodgingform', values)
      let category = 'lodging';
    return dispatch(postItem(values, category))
  }

  render() {
    const datePicker = ({ input: { onChange, value }, showTime }) => (
      <DateTimePicker
        onChange={onChange}
        format="DD MMM YYYY"
        time={showTime}
        value={!value ? null : new Date(value)}
      />
    );
    let successMessage;
    if (this.props.submitSucceeded) {
      successMessage = (
        <div className="message message-success">
          Message submitted successfully
        </div>
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
      className="form"
      onSubmit={this.props.handleSubmit((values, dispatch) =>
          this.onSubmit(values, dispatch)
      )}>
        {successMessage}
        {errorMessage}


        <label htmlFor="notes">Lodging name</label>
        <Field
          name="notes"
          type="text"
          component={Input}
          validate={[required]}
        />


<label htmlFor="check_in">Check-in date</label>
        <Field
          name="check_in"
          showTime={false}
          component={datePicker}
          validate={[required]}
        />


<label htmlFor="check_out">Check-out date</label>
  <Field
          name="check_out"
          showTime={false}
          component={datePicker}
          validate={[required]}
        />

        
<label htmlFor="address">Address</label>
        <Field
          name="address"
          type="text"
          component={Input}
        />


<label htmlFor="phone">Phone number</label>
        <Field
          name="phone"
          type="text"
          component={Input}
        />


<label htmlFor="email">Contact email</label>
        <Field
          name="email"
          type="text"
          component={Input}
        />


<label htmlFor="confirmation">Confirmation Image</label>
        <Field
          name="confirmation"
          type="text"
          component={ImageInput}
        />

        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Record Lodging
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "_lodging",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("contact", Object.keys(errors)[0]))
})(CreateLodgingForm);

