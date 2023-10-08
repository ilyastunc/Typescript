import {Taxi} from './taxi';

let taxi_1 = new Taxi({x:2, y:3});
taxi_1.travelTo({x:4, y:7});

let currentLocation =  taxi_1.location;
taxi_1.location = {x:9, y:5};