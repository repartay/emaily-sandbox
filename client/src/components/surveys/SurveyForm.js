import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
	renderFields() {
		return _.map(formFields, ({ label, name })=> {
			return (
				<Field component={SurveyField} type="text" label={label} name={name} key={name} />
			);
		});
	}
	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
					{this.renderFields()}		
					<Link to="/surveys" className="red btn-flat white-text">
						Cancel
					</Link>		
					<button className="btn waves-effect waves-light right" type="submit">
						<i className="material-icons right">send</i>
          				Submit
        			</button>
				</form>
			</div>
		);
	}
};

function validate(values) {
	const errors = {};
	errors.recipients = validateEmails(values.recipients || '');
	_.each(formFields, ({ name }) => {
		if (!values[name]) {
			errors[name]= 'You must provide a value';
		}
	});
	
	return errors;
}

export default reduxForm({
	form: 'surveyForm',
	validate,
	destroyOnUnmount: false
})(SurveyForm);
