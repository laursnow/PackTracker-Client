import React from "react";
import { reduxForm, Field, focus } from "redux-form";
import Input from "./input";
import { required, nonEmpty } from "./validators";
import { postItinerary } from "../../redux/actions/";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
import momentLocalizer from "react-widgets-moment";
import moment from 'moment';

momentLocalizer(moment);

// date: Date,
// time: String,
// address: String,
// phone: String,
// email: String,
// notes: String,
// ticket: String,
// itinerary

export class CreateItineraryForm extends React.Component {
    onSubmit(values, dispatch) {
    return dispatch(postItinerary(values))
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
      onSubmit={this.props.handleSubmit((values, dispatch) =>
          this.onSubmit(values, dispatch)
      )}>
        {successMessage}
        {errorMessage}
        <Field
          name="title"
          type="text"
          component={Input}
          label="Title"
          validate={[required, nonEmpty]}
        />
        <Field
          name="date-leave"
          showTime={false}
          component={datePicker}
          label="Date Leaving"
          validate={[required]}
        />
        <Field
          name="date-return"
          showTime={false}
          component={datePicker}
          label="Date Returning"
          validate={[required]}
        />

        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Send message
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "itinerary",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("contact", Object.keys(errors)[0]))
})(CreateItineraryForm);

