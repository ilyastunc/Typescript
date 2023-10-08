var Taxi = /** @class */ (function () {
    // private color: string;
    // private currentLocation: Point;
    // constructor(location?: Point, color?: string) {
    //     this.currentLocation = location;
    //     this.color = color;
    // }
    function Taxi(_location, _color) {
        this._location = _location;
        this._color = _color;
    }
    ; //bu tek satırlık kod ile yukardaki 5 satırlık kod aynı işlevi görüyor. Burda location ve color attribute'lerinin private olduğunu constructor'da belirttik.
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X: ".concat(this._location.x, " Y: ").concat(this._location.y, " dan X: ").concat(point.x, " Y: ").concat(point.y, " konumuna gidiyor."));
    };
    Object.defineProperty(Taxi.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            if (value.x < 0 || value.y < 0) {
                throw new Error('koordinat değerleri negatif olamaz');
            }
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 3, y: 4 });
taxi_1.travelTo({ x: 1, y: 2 });
var currentLocation = taxi_1.location;
taxi_1.location = { x: 3, y: 5 };
taxi_1.travelTo({ x: 1, y: 2 });
