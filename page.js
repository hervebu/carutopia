
let car_flexbox = document.querySelector('.categories'),
    carImg = document.getElementById('car-selected'),
    carTitle = document.getElementById('car-title'),
    carName = document.getElementById('info-name'),
    carManufacturer = document.getElementById('info-make'),
    carYr = document.getElementById('info-year'),
    carCondition = document.getElementById('info-condition'),
    carMileage = document.getElementById('info-mileage'),
    carCost = document.getElementById('checkout-val'); 


const vehiclesDetails = [
    {
        title: 'White Toyota sedan',
        name: 'Toyota 2016 model',
        img: './assets/white-toyota.jpg',
        manufacturer: 'Toyota',
        year: '2015',
        condition: 'Brand new',
        mileage: '0',
        cost: 9000000
    },
    {
        title: 'Fuso Mitsubishi',
        name: 'Fuso Mitsubishi 2006',
        img: './assets/fuso.jpg',
        manufacturer: 'Mitsubishi',
        year: '2006',
        condition: 'Used',
        mileage: '50',
        cost: 25000000
    },
    {
        title: 'White bus',
        name: 'Yutong long bus 2014',
        img: './assets/buses.jpg',
        manufacturer: 'Yutong',
        year: '2014',
        condition: 'new',
        mileage: '0',
        cost: 90000000
    },
    {
        title: 'Black Hyundai Sentafe',
        name: 'Hyundai Sentafe',
        img: './assets/black-sentafe.jpg',
        manufacturer: 'Hyundai',
        year: '2014',
        condition: 'used',
        mileage: '20',
        cost: 9000000
    },
    {
        title: 'Suzuki truck',
        name: 'Suzuki truck 2012',
        img: './assets/suzuki-trucks.jpg',
        manufacturer: 'Suzuki',
        year: '2012',
        condition: 'used',
        mileage: '10',
        cost: 35000000
    }
];



const addCarInfo = () => {
    for (let i = 0; i < vehiclesDetails.length-1; i++) {
        car_flexbox.innerHTML += 
        `<div class='flex_child' onclick='assignCarInfo("${vehiclesDetails[i].title}",` 
        +` "${vehiclesDetails[i].name}", "${vehiclesDetails[i].img}", "${vehiclesDetails[i].manufacturer}",`
        +` "${vehiclesDetails[i].year}", "${vehiclesDetails[i].condition}", "${vehiclesDetails[i].mileage}", "${vehiclesDetails[i].cost}")'>
        <img class='stock-img' tabindex='1' src='${vehiclesDetails[i].img}'>`
        +`<h2 class='child_h car_title'>${vehiclesDetails[i].title}</h2>`
        +`<h4 class='cont-link' >${vehiclesDetails[i].cost}<span> RWF</span></h4></div>`;
    }
}

addCarInfo();

    const assignCarInfo = (title, 
        name, img, manufacturer, 
        year,condition, mileage, 
        cost) => {
            localStorage.setItem('car_img', img);
            localStorage.setItem('car_title', title);
            localStorage.setItem('car_name', name);
            localStorage.setItem('car_make', manufacturer);
            localStorage.setItem('car_yr', year);
            localStorage.setItem('car_cond', condition);
            localStorage.setItem('car_miles', mileage);
            localStorage.setItem('car_cost', cost);
            window.location.assign('../carutopia/cardetails.html');
        };
