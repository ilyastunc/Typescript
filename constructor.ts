interface Point{
    x:number,
    y:number
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle
{
    constructor(location?: Point, color?: string) {
        this.currentLocation = location;
        this.color = color;
    }

    color: string;
    currentLocation: Point;
    travelTo(point: Point): void
    {
        console.log(`taksi X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }
}

class Bus implements Vehicle
{
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`otobüs X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }
}

let taxi_1 = new Taxi({x:3, y:4}); // 3 ayrı şekilde taksi oluşturduk.
taxi_1.color = 'red';

let taxi_2 = new Taxi({x:5, y:2}, 'red');

let taxi_3 = new Taxi();


taxi_1.travelTo({x:1,y:2});

console.log(taxi_1.currentLocation);
