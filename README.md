# FoodieDelightWebApp

Food delivery app. It manages different Restaurants and their menus. 
UI framework - React JS. Latest Version 18 used. 
Material UI and React Router DOM version 6. 
This webApp is responsive.
Steps: 
    - Architecture  for FoodieDelight WebApp using ReactJS
    - Material UI dependencies
    - React Router DOM for navigation
    - Route elements created
    - Header 
    - Navigation added to different  pages
    - Footer
    - Home Page Created
    - About Page
    - Contact Page
    - Dummy data file created for Restaurant List and Menu Item List. 
    - Dummy restaurant data and menu Items displyed.
    - Add Restaurant and Menu Item.
    - Page Not Found Exception added.

Functionality for Restaurant Admin :
- Add new Restaurant to platform (Done)
    - Name of Restaurant
    - Description
    - Location
    - Cost for 2
    - Type
    - Discounts/ offer


- Update Restaurant details (Done)
- Delete Restaurant from platform (Done)
- List of restaurants from platform :
    - Fetched via API from backend (Dependency on backend)
    - All API call should be async and avoid full-page reload (Need to consume API )
    - Usability in terms of navigations
    - Ensure responsiveness (Done)
    - Data validations (Done)
    - Exceptional handlings (Not considered)


    >FoodieDelight
	> node-modules
	> public
	> src
		> Components
 			> Footer
			> Header
			> Layout
		> data
			> restaurantList
			> menu Items
		> images
		> pages
			> Home
			> About
			> Contact
			> AddRestaurant
			> AddMenuItems
			> PageNotFound
		> Styles
	> App.js
	> App.test.js
	> index.css
	> package.json
	> package.lock.json
	> Readme.md

Please note: 
Assume the backend APIs would be created after UI has been designed based on UI
requirements. Please assume mock data to proceed.

According to above statement:
New Restaurants will not be added to the list of restaurants already present. The list of restaurants is const data. Dummy data in a file. Same is applicable for Menu Items. 
Update and Delete functions will not update or delete any data present in mock data. 

Breakdown of time spent on different aspects of development:
Architecture and design finalization - 2hrs
React router elements and navigation - 2hrs
Header, Footer and Layout including responsive designs - 2 hrs
About and contact page - 1hr
Dummy data files, Restaurant List Page, Menu Item List Page - 2hrs
Add Restaurant and Menu Item dialog box with validations - 3 hrs

