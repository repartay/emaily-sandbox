import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

class SurveyForm extends Component {
	renderFields() {
		return(
			<div>
				<Field 
					type="text" 
					name="title" 
					component={SurveyField} 
					label="Survey Title"
				/>
				<Field 
					type="text" 
					name="subject" 
					component={SurveyField} 
					label="Subject Line"
				/>
				<Field 
					type="text" 
					name="body" 
					component={SurveyField} 
					label="Email Body"
				/>
				<Field 
					type="Recipients List" 
					name="emails" 
					component={SurveyField} 
					label="Survey Title"
				/>
			</div>
		);
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
