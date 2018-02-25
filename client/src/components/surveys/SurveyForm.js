import _ from 'lodash';
import React, { Component } from 'react';
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
			return <Field component={SurveyField} type="text" label={label} name={name} />
		});
	}
	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(values => console.log('values', values))}>
					<h2>Survey Form</h2>
					{this.renderFields()}				
					<button className="btn waves-effect waves-light" type="submit">
						<i className="material-icons right">send</i>
          				Submit
        			</button>
				</form>
			</div>
		);
	}
};

export default reduxForm({
	form: 'surveyForm'
})(SurveyForm);
