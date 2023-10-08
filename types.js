var a = 5;
var b;
b = "abc";
var c = true;
var d; //any olduğu zaman herhangi bir değer alabiliyor. önce d'ye number atayıp, sonrasında string de atılabilir.
d = 5;
d = "abc";
var e = [1, 2, 3]; //arrraylar hem e gibi hem de f gibi tanımlanabiliyor.
var f = [1, 2, 3];
var g = [1, 'a', true]; //aynı array içinde farklı türde değişkenler olacaksa any kullanılabilir.
var h = ['abc', 3, true]; //tuple, farklı türdeki değişkenleri belli bir düzende dizide tutmak için
var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havale"] = 5] = "havale";
    Payment[Payment["kapidaOdeme"] = 2] = "kapidaOdeme";
    Payment[Payment["eft"] = 3] = "eft";
})(Payment || (Payment = {}));
;
var kredi = Payment.kredi; //0
var havale = Payment.havale; //5
