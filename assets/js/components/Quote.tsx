import * as React from 'react';

export const Quote = (props: {
	text: string,
	author: string
}) => <div className="font-italic col-12 d-flex justify-content-center">
	<div>
		<span className="d-block text-center">"{ props.text }"</span>
		<span className="quote-block-author">- { props.author }</span>
	</div>
</div>;
