let a:number = 5;
let b: string;
b="abc";
let c:boolean=true;
let d: any; //any olduğu zaman herhangi bir değer alabiliyor. önce d'ye number atayıp, sonrasında string de atılabilir.
d = 5;
d ="abc";

let e: number[] = [1,2,3]; //arrraylar hem e gibi hem de f gibi tanımlanabiliyor.
let f: Array<number> = [1,2,3];
let g: any[] = [1,'a', true]; //aynı array içinde farklı türde değişkenler olacaksa any kullanılabilir.
let h: [string,number,boolean] = ['abc', 3, true]; //tuple, farklı türdeki değişkenleri belli bir düzende dizide tutmak için

const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 2;

enum Payment {kredi=0,havale=5, kapidaOdeme=2, eft=3};

let kredi = Payment.kredi;//0
let havale = Payment.havale; //5