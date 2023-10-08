var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.currentLocation = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X: ".concat(point.x, " Y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("otob\u00FCs X: ".concat(point.x, " Y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Bus;
}());
var taxi_1 = new Taxi({ x: 3, y: 4 });
taxi_1.color = 'red';
var taxi_2 = new Taxi({ x: 5, y: 2 }, 'red');
var taxi_3 = new Taxi();
taxi_1.travelTo({ x: 1, y: 2 });
console.log(taxi_1.currentLocation);
