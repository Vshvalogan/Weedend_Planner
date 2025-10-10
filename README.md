Weekend Plan Wizard
READ: Browse/search/filter places from Local Results APIREAD: View individual place details
* As a  user I should see a list of popular places on the home page so that I can discover new spots for the weekend.
* As a  user I should be able to search for places by city/keyword so that I can quickly find what I’m looking for.
* As a  user I should be able to filter results by category (e.g., Café, Museum, Restaurant)
* As a  user I should be able to click on a place and view its details (title, address,  description)wee so that I can learn more about the specific place.
 Airtable:
* As a user, I should be able to add a place to my personal saved places list (CREATE) so that I can save it for later.
* As a user, I should be able to remove a place from my saved places list (DELETE).

Application Structure
Pages
1. Home Page (/)
2. Places Page (/places)
3. Place Details Page (/places/:id)
4. Saved Places Page (/places/savedplaces)
Components
* NavBar
* PlaceCard
* PlaceList
* SavedPlacesCard
* SavedPlacesList
Service
* placeService.js

g