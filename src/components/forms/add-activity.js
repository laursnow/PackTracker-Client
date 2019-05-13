import React from "react";
import { reduxForm, Field, focus } from "redux-form";
import Input from "./input";
import ImageInput from "./image-input"
import { required } from "./validators";
import { postItem } from "../../redux/actions/";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
import momentLocalizer from "react-widgets-moment";
import moment from 'moment';
import "../App.css";

momentLocalizer(moment);


class CreateActivityForm extends React.Component {
    onSubmit(values, dispatch) {
      console.log('activityform', values)
      let category = 'activity';
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

        <label htmlFor="notes">Activity name</label>
        <Field
          name="notes"
          type="text"
          component={Input}
          validate={[required]}
        />


<label htmlFor="date">Date</label>
         <Field
          name="date"
          showTime={false}
          component={datePicker}
          validate={[required]}
        />


<label htmlFor="time">Time</label>
        <Field
          name="time"
          type="text"
          component={Input}
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


<label htmlFor="email">Email Contact</label>
        <Field
          name="email"
          type="text"
          component={Input}
        />


<label htmlFor="ticket">Ticket/Image</label>
        <Field
          name="ticket"
          type="text"
          component={ImageInput}
        />
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Record Activity
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "_activity",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("contact", Object.keys(errors)[0]))
})(CreateActivityForm);

