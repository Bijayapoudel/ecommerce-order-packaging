# Order Management Backend

This is the backend service for the Order Management system. It provides RESTful APIs to manage and process orders.

## Features

- Create orders with selected items.
- Calculate total weight and price for the orders.
- Package items based on provided criteria.
- Responds with order package details.

## Technologies Used

- Node.js
- Express.js
- Axios (for HTTP requests in testing)

## Getting Started

### Prerequisites

- Node.js (version 14.x or higher)
- npm (version 6.x or higher)
- MySQL or MongoDB (depending on your database choice)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Bijayapoudel/ecommerce-order-packaging.git
   cd ecommerce-order-packaging
   ```

2. Install Dependencies

Make sure you have Node.js and npm installed. Then run:
npm install

3. Configure Environment Variables

Create a .env file in the root directory of the project. You can use the following template:

4. Run the Server

Start the server using: npm start

## API Endpoints

Example:

POST : /api/orders

Description: Create an order with selected items.

Request Body:
{

  "items": [1, 2, 3]

}

## License

This project is licensed under the MIT License. See the LICENSE file for details.

