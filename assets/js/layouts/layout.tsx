import * as React from 'react';

export const Layout = (props: React.PropsWithChildren<{}>) => <div>
	<div className="navbar"><h1 className="ml-auto mr-auto p-0">STFUANDCLICK.COM</h1></div>
	<div className="container-fluid">
		<div className="row justify-content-center align-items-center">
			<div className="col-12 inner-app">
				{props.children}
				<div className="pt-5 pb-5 text-center quote font-italic">
					If you don't like this page. It's <a href="https://applifting.cz/">Applifting</a>'s fault.
				</div>
			</div>
		</div>
	</div>
</div>;
