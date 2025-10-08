export async function index(keyword, city) {
  const API_KEY =
    "e34e9463007dd85ad12eb1d1f5bfdfa74aeac4b0011ba66aa4acee32c1c28549";

	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
	//https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS
	//https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141\
	
  const realURL = `https://serpapi.com/search.json?engine=google_local&q=${keyword}&location=${city}&api_key=${API_KEY}`;
  const proxyURL = `https://api.allorigins.win/raw?url=${encodeURIComponent(realURL)}`;

  try {
    const response = await fetch(proxyURL);
    console.log("Response status:", response.status);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log("API result:", result);
    return result;
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}
