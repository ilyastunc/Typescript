var Taxi = /** @class */ (function () {
    // private color: string;
    // private currentLocation: Point;
    // constructor(location?: Point, color?: string) {
    //     this.currentLocation = location;
    //     this.color = color;
    // }
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
    }
    ; //bu tek satırlık kod ile yukardaki 5 satırlık kod aynı işlevi görüyor. Burda location ve color attribute'lerinin private olduğunu constructor'da belirttik.
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X: ".concat(this.location.x, " Y: ").concat(this.location.y, " dan X: ").concat(point.x, " Y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 3, y: 4 }); // 3 ayrı şekilde taksi oluşturduk.
taxi_1.travelTo({ x: 1, y: 2 });
