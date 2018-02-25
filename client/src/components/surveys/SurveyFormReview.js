import React from 'react';

const SurveyFormReview = ({ onCancel }) => {
	return (
		<div>
			<h5>Please review your entries</h5>
			<button 
				className="yellow darken-3 btn-flat"
				onClick={onCancel}
			>
          		Back
          		<i className="material-icons right">cancel</i>
        	</button>
        </div>
	);
};

export default SurveyFormReview;