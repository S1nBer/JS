/* import * as mod1 from "./module1";
import Product from "./module2";

console.log(new Product("Jija"));
mod1.foo(); */

/* import { getData } from "./module1";

console.log(getData()); */

import api from "./services/apiService";

api.countries().then((res) => console.log(res));
api.cities().then((res) => console.log(res));
