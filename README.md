MealMate

MealMate is a feature-rich food delivery application designed to provide a seamless dining experience. With real-time restaurant data, dynamic menu filtering, and integrated payment options, MealMate aims to make ordering food easy and enjoyable.

 <!-- Replace with your logo -->
Features

    Dynamic Restaurant Listings: Fetch and display restaurant details based on user location.
    Customizable Menu: Filter menus by vegetarian, non-vegetarian, bestsellers, and offers.
    Real-time Data: Auto-fetch location data for nearby restaurants.
    Cart Management: Add, remove, and clear items in the cart with Redux integration.
    Payment Integration: Seamless payment options with Razorpay.
    AI Integration: Chat AI (Gemini) for enhanced user interaction.
    Authentication: Secure login using Auth0.
    Location-based Services: Utilize dynamic maps to fetch and display user location data.

Tech Stack

    Frontend: React, Tailwind CSS, SCSS
    Backend: Axios (for API calls)
    State Management: Redux
    Payment Gateway: Razorpay
    Authentication: Auth0
    AI Integration: Chat AI (Gemini)
    Map Integration: Dynamic map locations
    Data Storage: LocalStorage for cart state

Live Demo

Check out the live demo of MealMate here. <!-- Replace with your live demo link -->
Installation
Prerequisites

    Node.js
    npm or yarn

Setup

    Clone the repository:

    bash

git clone https://github.com/yourusername/mealmate.git
cd mealmate

Install dependencies:

bash

npm install
# or
yarn install

Set up environment variables:

Create a .env file in the root of the project and add the following variables:

env

REACT_APP_IMAGE_URL=your_image_url
REACT_APP_AUTH0_DOMAIN=your_auth0_domain
REACT_APP_AUTH0_CLIENT_ID=your_auth0_client_id

Start the development server:

bash

    npm start
    # or
    yarn start

    Important: Before accessing the application, you need to install a CORS extension to avoid any issues with CORS. You can add the extension from this link.

Screenshots
