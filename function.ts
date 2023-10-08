function getAverage(a:number, b:number, c?:number) : string
{
    let total = a+b;
    let count = 2;

    if (typeof c !== 'undefined')
    {
        total += c;
        count++;
    }

    const result = total/count;
    return 'result: ' + result;
}

getAverage(10,20,30);
getAverage(10,20); //3. elemanı nullable yaptığımız için 2 elemanla çağırabiliyoruz.

function getAverage2(...a:number[]): string //gelen dizideki eleman sayısı belli değilse böyle yazarız.
{
    let total = 0;
    let count = 0;

    for (let i=0; i<a.length; i++)
    {
        total += a[i];
        count++;
    }

    const result = total/count;
    return 'result: ' + result;
}

getAverage2(10,20,30,40); //istediğimiz kadar elemanla çağırabiliyoruz.

const getAverage3 = (...a:number[]): string => //getAverage2 fonksiyonunu arrow function şeklinde yazdık, daha modern.
{
    let total = 0;
    let count = 0;

    for (let i=0; i<a.length; i++)
    {
        total += a[i];
        count++;
    }

    const result = total/count;
    return 'result: ' + result;
}

getAverage3(10,20,30,40); //