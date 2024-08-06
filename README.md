Here's the updated README with the CORS extension note moved to a top-level section:

# **MealMate**

MealMate is a feature-rich food delivery application with real-time restaurant data, dynamic menu filtering, and integrated payment options.

## **Important Note**

Before accessing the application, you need to install a CORS extension to avoid any issues with CORS. You can add the extension from [this link](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en-US&utm_source=ext_sidebar).

## **Key Features**

**Dynamic Restaurant Listings:** Fetch and display restaurant details based on user location.

**Customizable Menu:** Filter menus by vegetarian, non-vegetarian, bestsellers, and offers.

**Real-time Data:** Auto-fetch location data for nearby restaurants.

**Cart Management:** Add, remove, and clear items in the cart with Redux integration.

**Payment Integration:** Seamless payment options with Razorpay.

**AI Integration:** Chat AI (Gemini) for enhanced user interaction.

**Authentication:** Secure login using Auth0.

**Location-based Services:** Utilize dynamic maps to fetch and display user location data.

## **Technologies Used**

**Frontend:** React, SCSS

**State Management:** Redux

**Payment Gateway:** Razorpay

**Authentication:** Auth0

**AI Integration:** Chat AI (Gemini)

**Map Integration:** Dynamic map locations

**Data Storage:** LocalStorage for cart state

Check out the live demo of [MealMate here](https://mealmatebyvardaan.vercel.app/)

## **Installation & Prerequisites**

**Node.js**

**npm or yarn**

### Setup

Clone the repository:

```bash
git clone https://github.com/vardaan-bhatia/MealMate.git
cd mealmate
```

Install dependencies:

```bash
npm install
# or
yarn install
```

Set up environment variables:

Create a `.env` file in the root of the project and add the following variables:

```
REACT_APP_IMAGE_URL=your_image_url
REACT_APP_AUTH0_DOMAIN=your_auth0_domain
REACT_APP_AUTH0_CLIENT_ID=your_auth0_client_id
REACT_APP_LOCATION_ID=your_location_id
```

Start the development server:

```bash
npm start
# or
yarn start
```

## **Screenshots**

![image](https://github.com/user-attachments/assets/6ca5b8f3-14dd-4506-a5c1-d21a5d4a35cf)
---

![image](https://github.com/user-attachments/assets/bd850edd-6816-4781-893b-2921d38dd15e)
---

![image](https://github.com/user-attachments/assets/c9a1f544-1fb6-4c38-8e72-9d6951ae7c82)
---

![image](https://github.com/user-attachments/assets/52ad05de-7f2b-492f-b422-e2ca4daff1ba)
---

![image](https://github.com/user-attachments/assets/1c987a50-2c16-4f13-930f-c52a6473e7e8)
---

![image](https://github.com/user-attachments/assets/c4bb4bba-0740-4469-8599-5522ae8f9190)
---









