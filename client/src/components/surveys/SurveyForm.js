import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

const FIELDS = [
	{
		label: 'Survey Title',
		name: 'title'
	},
	{
		label: 'Subject Line',
		name: 'subject'
	},
	{
		label: 'Email Body',
		name: 'body'
	},
	{
		label: 'Recipient List',
		name: 'emails'
	}
];

class SurveyForm extends Component {
	renderFields() {
		return _.map(FIELDS, ({ label, name })=> {
			return (
				<Field component={SurveyField} type="text" label={label} name={name} key={name} />
			);
		});
	}
	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(values => console.log('values', values))}>
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
	_.each(FIELDS, ({ name }) => {
		if (!values[name]) {
			errors[name]= 'You must provide a value';
		}
	});
	
	return errors;
}

export default reduxForm({
	form: 'surveyForm',
	validate
})(SurveyForm);
