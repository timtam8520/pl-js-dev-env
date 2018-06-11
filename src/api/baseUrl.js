export default function getBaseUrl() {
	return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

function getQueryStringParameterByName(name, url) {
	if (!url) {
		url = window.location.href;
	}
	name = name.replace(/[\[\]]/g, '\\$&');
	const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
	const results = regex.exec(url);
	if (!results) {
		return null;
	} else if (!results[2]) {
		return '';
	} else {
		return decodeURIComponent(results[2].replace('/\+/g', " "));
	}
}
