import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class SurveyForm extends Component {
	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(values => console.log('values', values))}>
					<h2>Survey Form</h2>
					<div>
						<label>Survey Title</label>
						<Field
							type="text"
							name="surveyTitle"
							component="input"
						/>
					</div>
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
