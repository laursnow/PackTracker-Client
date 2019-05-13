import React from "react";
import { reduxForm, Field, focus } from "redux-form";
import Input from "./input";
import { required, nonEmpty } from "./validators";
import { postItinerary } from "../../redux/actions/";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
import momentLocalizer from "react-widgets-moment";
import moment from 'moment';
import "../App.css";

momentLocalizer(moment);

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
          New itinerary saved!
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

        
        <label htmlFor="title">Trip title</label>
        <Field
          name="title"
          type="text"
          component={Input}
          validate={[required]}
        />

        
<label htmlFor="date-leave">Leave date</label>
        <Field
          name="date-leave"
          showTime={false}
          component={datePicker}
          validate={[required]}
        />
        

        <label htmlFor="date-return">Return date</label>
          <Field
          name="date-return"
          showTime={false}
          component={datePicker}
          validate={[required]}
        />

        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Save Itinerary
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "_itinerary",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("contact", Object.keys(errors)[0]))
})(CreateItineraryForm);

