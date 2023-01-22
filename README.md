# CheckoutReact

CheckoutReact is a React Application used to display a checkout system that handles pricing schemes such as “apples cost 50 pence, three apples cost £1.30.”
This project includes a interface which allows you to add items to your cart to which the pricing, quantity and discounted pricing is displayed.

## Installation

1. Clone the repo

```sh
   git clone https://github.com/AlexKman/CheckoutReact.git
```

2. Install NPM packages

```sh
   npm install
```

## Running the project

Following the Installation instructions, simply run the following command to run the project in your localhost

```sh
   npm start
```

## Key Decisions made

I decided to utilize React as part of this project as it followed the guidelines of the project. I wrote custom styling without the use of a library to keep things simple and display all components clearly. The codebase utilizes two different components outside the header, unfortunately due to time constraints I had to include the itemsList component within my app component as I was struggling to maintain the state of the pricing when separating both components. With more time I am confident I could have separated the entire project into separate components.

Furthermore, with more time into the project I would have built a full static version of my application. Usually I style my components beforehand with our styling guidelines but for this project I went more functional first, styled the components to a certain level and then styled after the functionality was complete, I considered the functionality here more important than the styling. Continuing with the full static version, I would have decided on a class system beforehand and been consistent throughout the applciation with naming guidelines. i would have also written some unit tests around calculating the pricing of basic calculations and then more advanced with multiple discounts applied, this would have been done before writing any code around the adding of products.
