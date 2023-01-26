// import {KnightContainer} from "./src/libs/knights/KnightContainer";
// import {WeatherContainer} from "./src/libs/battle/weather/WeatherContainer";
// import {BattlefieldContainer} from "./src/libs/battle/battlefield/BattlefieldContainer";
// import {BarbarianContainer} from "./src/libs/barbarians/BarbarianContainer";
// import {WarriorBase} from "./src/libs/WarriorBase";
//
//
//
// const kingsArmy = KnightContainer().IArmy(5)
// const barbarianHorde = BarbarianContainer().IArmy(5);
//
//  const weather = WeatherContainer().Forecast();
//  const Battlefield = BattlefieldContainer().IBattlefield();
//
//  while(kingsArmy.warriors.length > 0 && barbarianHorde.warriors.length > 0) {
//       kingsArmy.attack(barbarianHorde, Battlefield, weather);
//       barbarianHorde.Attack(kingsArmy, Battlefield, weather);
//       kingsArmy.warriors.filter (x=> x.health > 0).foreach(x => x.attack)
//   }

import {LifetimesDemo} from "./src/demo/LifetimesDemo";

LifetimesDemo();