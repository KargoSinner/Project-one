 let Grup = [
        {firstName: 'Shapowal',   lastName:  'Denis',  ratting:  '90'},
        {firstName: 'Stoyko',  lastName:  'Volodimir',  ratting:  '85'},
        {firstName: 'seredinagiy',   lastName:  'Saichishin',  ratting:  '98'},
        {firstName: 'Ivan',  lastName:  'Saichishin',    ratting:  '88',},
        {firstName: 'Maxim',  lastName:  'Koloda',     ratting:  '84',},
        {firstName: 'Maxim',  lastName:  'Kovzun', ratting:  '82',},
        {firstName: 'Oleg',   lastName:  'Zhakun', ratting:  '93',},
        {firstName: 'Dmitro',  lastName:  'Koval',   ratting:  '75',},
        {firstName: 'Dmitro',  lastName:  'Klimovskiy',   ratting:  '60',},
    ]

    const sortObj = (arr, id) => {
        let compare = (a, b) => a[id] > b[id] ? 1 : a[id] == b[id] ? 0 : -1;
        arr.sort(compare);
    }

    const compare = (arr, key, callback) => arr.reduce((prev, curr) =>
        (callback(prev[key], curr[key]) ? prev : curr), {})[key];

    const rateMin = compare(Grup, 'ratting', (a, b) => a < b);
    const rateMax = compare(Grup, 'ratting', (a, b) => a > b);


    function seredina () {
        let suma=0;
        for (const key in Grup){
            suma += +Grup[key].ratting;
        };
        let seredina = Math.ceil(suma/Grup.length);
        return seredina.toString();
    }

    function rate (){
        for (const key in Grup) {
            let value;
            value = Math.round(((rateMax/Grup[key].ratting)*100)-100);
            Grup[key].rate = value;
        }
    }
	//Sorting
    sortObj(Grup, 'firstName');
    console.log(Grup);
    console.log('\n')
    sortObj(Grup, 'lastName');
    console.log(Grup);
    console.log('\n')
    sortObj(Grup, 'ratting');
    console.log(Grup);
    console.log('\n');
	//

    console.log('Мінімальне та Максимальне значення'+'\n'+`Min: ${rateMin}, Max: ${rateMax}`);
    console.log(Grup.find(x => x.ratting === seredina()));
    console.log(Grup.find(x => x.ratting === rateMin));
    console.log(Grup.find(x => x.ratting === rateMax));

    rate();
    console.log('\n'+'Добавлення поля rate: ')
    console.log(Grup);