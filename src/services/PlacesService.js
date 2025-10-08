export async function index(keyword, city) {
	const API_KEY =
		"e34e9463007dd85ad12eb1d1f5bfdfa74aeac4b0011ba66aa4acee32c1c28549";

	const url = `https://serpapi.com/search.json?engine=google_local&q=${keyword}&location=${city}&api_key=${API_KEY}`;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const result = await response.json();
		return result; 
	} catch (error) {
		console.error(error.message);
	}
}
