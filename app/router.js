import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { HouseController } from "./controllers/HouseController.js";

export const router = [
  {
    path: '',
    controller: HomeController
  },
  {
    path: '#/about',
    controller: AboutController
  },
  {
    path: '#House',
    controller: HouseController
  }
]
