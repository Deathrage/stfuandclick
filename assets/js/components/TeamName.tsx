import React = require('react');

export const TeamName = (props: { teamName: string, teamUrl: string }) => <div className="teamname">
	<h2 className="text-center pb-3">Clicking for team <strong>{ props.teamName }</strong></h2>
	<div className="teamname-share text-center font-italic">
		Too lazy to click? Let your pals click for you: <input className="form-control d-inline-block font-italic" type="text" value={ props.teamUrl } readOnly />
	</div>
</div>;
