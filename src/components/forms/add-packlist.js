import React from "react";
import { reduxForm, Field, focus, FieldArray } from "redux-form";
import Input from "./input";
import InputItem from "./inputitem";
import { required, nonEmpty } from "./validators";
import { postPackList } from "../../redux/actions";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
import momentLocalizer from "react-widgets-moment";
import moment from 'moment';
import "../App.css";

momentLocalizer(moment);


export class CreatePackListForm extends React.Component {
    onSubmit(values, dispatch) {
    return dispatch(postPackList(values));
  }

  render() {  

    const listItem = ({ fields, meta: { touched, error } }) => (
      <ul>
        <li>
          <button type="button" onClick={() => fields.push({})}>Add Item</button>
          {touched && error && <span>{error}</span>}
        </li>
        {fields.map((item, index) =>
          <li key={index}>
            <button
              type="button"
              title="Remove Item"
              onClick={() => fields.remove(index)}/>
              <label htmlFor="date-leave">{index + 1}. </label>
            <Field
              name="item"
              type="text"
              component={InputItem}
              />
          </li>
        )}
      </ul>
    )
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

        <FieldArray 
        name="item" 
        component={listItem}/>

        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Save PackList
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


