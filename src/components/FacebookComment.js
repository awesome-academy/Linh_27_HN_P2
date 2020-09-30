import React, { useEffect } from "react";

function FacebookComment() {
	const location = window.location.href;
	
	useEffect(() => {
		if (window.FB) {
			window.FB.XFBML.parse();
		}
		window.fbAsyncInit = () => {
			window.FB.init({
				appId: "256526935601425",
				cookie: true,
				xfbml: true,
				version: "v8.0",
			});
			window.FB.AppEvents.logPageView();
		};
		(function (d, s, id) {
			var js,
				fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {
				return;
			}
			js = d.createElement(s);
			js.id = id;
			js.src = "https://connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		})(document, "script", "facebook-jssdk");
	});

	return (
		<div
			className="fb-comments"
			data-colorscheme="dark"
			data-href={location}
			data-numposts="5"
			data-width="100%"
			data-lazy={true}
			data-order-by="reverse_time"
		></div>
	);
}

export default FacebookComment;
