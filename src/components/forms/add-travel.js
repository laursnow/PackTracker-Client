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

export class CreateTravelForm extends React.Component {
    onSubmit(values, dispatch) {
      console.log('travelform', values)
      let category = 'travel';
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
      onSubmit={this.props.handleSubmit((values, dispatch) =>
          this.onSubmit(values, dispatch)
      )}>
        {successMessage}
        {errorMessage}


        <label htmlFor="notes">Travel description</label>
        <Field
          name="notes"
          type="text"
          component={Input}
          validate={[required]}
        />


<label htmlFor="depart.date">Departure date</label>
      <Field
          name="depart.date"
          showTime={false}
          component={datePicker}
          validate={[required]}
        />

<label htmlFor="depart.time">Departure time</label>
        <Field
          name="depart.time"
          component={Input}
          validate={[required]}
        />
        
        <label htmlFor="depart.location">Departure location</label>
        <Field
          name="depart.location"
          component={Input}
          validate={[required]}
        />

<label htmlFor="depart.mode">Mode of transportation</label>
        <Field
          name="depart.mode"
          type="text"
          component={Input}
        />

<label htmlFor="depart.service">Service provider</label>
        <Field
          name="depart.service"
          type="text"
          component={Input}
        />

<label htmlFor="depart.seat">Seat/Section</label>
        <Field
          name="depart.seat"
          type="text"
          component={Input}
        />

<label htmlFor="arrive.date">Arrival date</label>
       <label>Arrival date<Field
          name="arrive.date"
          showTime={false}
          component={datePicker}
          validate={[required]}
        /></label>

<label htmlFor="arrive.time">Arrival time</label>
        <Field
          name="arrive.time"
          component={Input}
          validate={[required]}
        />

<label htmlFor="arrive.location">Arrival location</label>
        <Field
          name="arrive.location"
          component={Input}
          validate={[required]}
        />
       
       <label htmlFor="arrive.notes">Notes</label>
        <Field
          name="arrive.notes"
          type="text"
          component={Input}
        />

<label htmlFor="depart.ticket">Ticket image</label>
        <Field
          name="depart.ticket"
          type="text"
          component={ImageInput}
        />

        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Record Travel
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "_travel",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("contact", Object.keys(errors)[0]))
})(CreateTravelForm);

