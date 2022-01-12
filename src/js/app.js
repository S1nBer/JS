/* import * as mod1 from "./module1";
import Product from "./module2";

console.log(new Product("Jija"));
mod1.foo(); */

/* import { getData } from "./module1";

console.log(getData()); */

import locations from "./store/location";

locations.init().then((res) => {
  console.log(res);
  console.log(locations);
  console.log(locations.getCitiesByCountryCode("SL"));
});
