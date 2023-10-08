import {Point} from './Point';

export interface Vehicle { //export diyerek Vehicle modülünü dışarıya açıyoruz.
    travelTo(point: Point): void;
}