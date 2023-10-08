"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Taxi = void 0;
var Taxi = /** @class */ (function () {
    //burda get ve set metodlarını kullanarak private olarak tanımladığımız location ve color bilgilerini kontrollü bir şekilde değiştirmeyi sağladık. Dışardan direkt ulaşılmasını private yaparak engelledik. get ve set metodlarıyla ulaşılmasını sağladık.
    function Taxi(_location, _color) {
        this._location = _location;
        this._color = _color;
    }
    ;
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
exports.Taxi = Taxi;
