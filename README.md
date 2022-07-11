# Checkout Service - Zeller Computer Store

Checkout service to define the pricing rules freely on the product catalogue and calculate the cart total

## Pre-requisites
- [x] npm (version 7.x or higher)
- [x] node (version 16.x or higher)

## Dependencies

- [x] typescript
- [x] ts-node
- [x] jest
- [x] ts-jest
- [x] eslint
- [x] nodemon
- [x] dotenv

## Install Dependencies

```bash
  npm i
```

## Run the Application in Development

```bash
  npm run start:dev
```

## Run the Application in Production

```bash
  npm start
```

## Run Tests

```bash
  npm run test
```

## Run ESlint

```bash
  npm run lint
```


## Implementation

- Product seeder will seed the Product Information in the system including Product SKUs and Prices using the Product Service
- Pricing Rule seeder will seed the Pricing Rules in the system using the Pricing Rule Service
- The are 2 offers available in the system (buy X items for price of Y & Bulk discount on purchase of x items). It is designed in such a way that these offers can be added to any of the existing products with configurable values for X & Y.
- The Checkout service is responsible for scaning the skus and getting the total cart value.
- Test cases with 100% coverage are designed to ensure the proper functioning of the system.
- The project is configured with ESlint to ensure standard coding practices and to avoids bugs.
- On running the application, currently it will console.log the Total expected output of these scanned SKUs - atv, atv, atv, vga (scanned under CASE 1) 
- In order to console.log the  Total expected output of these SKUs - atv, ipd, ipd, atv, ipd, ipd, ipd. Uncomment CASE 2 and comment CASE 1

## Future Enhancements

- Implement REST APIs to provide integration with frontend
- Use database to store product information and offers
- Dockerize the application 
- Use a framework to further improve the code quality and reusability