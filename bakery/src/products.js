import darkchocolatecagecake from "./assets/images/darkchocolatecagecake.jpg";
import lemoncake from "./assets/images/lemoncake.jpeg";
import lavendercake from "./assets/images/levendercake.jpeg";
import oreocake from "./assets/images/oreocake.jpeg";

const products = [
  {
    name: "Dark Chocolate Cake",
    price: "12KD",
    image: darkchocolatecagecake,
  },
  {
    name: "Lemon Cake",
    price: "9KD",
    image: lemoncake,
  },

  {
    name: "Lavender Cake",
    price: "10KD",
    image: lavendercake,
  },

  {
    name: "Oreo Cake",
    price: "14KD",
    image: oreocake,
  },
];

export default products;
// in the export here: we are exporting product-array list not the file name.
// if we have more than one list in this file we have to do export
//for each one of them
