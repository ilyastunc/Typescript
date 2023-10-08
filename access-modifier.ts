interface Point{
    x:number,
    y:number
}

interface Vehicle {
    travelTo(point: Point): void;
}

class Taxi implements Vehicle
{
    // private color: string;
    // private currentLocation: Point;

    // constructor(location?: Point, color?: string) {
    //     this.currentLocation = location;
    //     this.color = color;
    // }

    constructor (private location? : Point, private color? : string) {}; //bu tek satırlık kod ile yukardaki 5 satırlık kod aynı işlevi görüyor. Burda location ve color attribute'lerinin private olduğunu constructor'da belirttik.

    travelTo(point: Point): void
    {
        console.log(`taksi X: ${this.location.x} Y: ${this.location.y} dan X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }
}

let taxi_1 = new Taxi({x:3, y:4}); // 3 ayrı şekilde taksi oluşturduk.

taxi_1.travelTo({x:1,y:2});

