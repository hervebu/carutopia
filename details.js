
let cImg = localStorage.getItem('car_img'),
    cTitle = localStorage.getItem('car_title'),
    cName = localStorage.getItem('car_name'),
    cMake = localStorage.getItem('car_make'),
    cYr = localStorage.getItem('car_yr'),
    cCondition = localStorage.getItem('car_cond'),
    cMileage = localStorage.getItem('car_miles'),
    cCost = localStorage.getItem('car_cost'),
    term_conds_checkbox = document.getElementById('terms-conds-checkbox'),
    checkout_btn = document.getElementById('checkout-btn'),
    checkoutBtn = document.getElementById('checkout-btn');

    
    const assign = () => {
        checkout_btn.disabled = true;
        checkout_btn.style.backgroundColor = '#db2d2da4';
        carImg.setAttribute('src', cImg);
        carTitle.innerHTML += cTitle;
        carName.innerHTML = cName;
        carManufacturer.innerHTML = cMake;    
        carYr.innerHTML = cYr;
        carCondition.innerHTML = cCondition;
        carMileage.innerHTML = cMileage;    
        carCost.innerHTML = cCost + ' RWF';
    };

    window.onload = assign();

    const checkboxClick = () => {
        if (!term_conds_checkbox.checked) {
            checkout_btn.disabled = true;
            checkout_btn.style.backgroundColor = '#db2d2da4';
         
        } else if (term_conds_checkbox.checked){
            checkout_btn.disabled = false;
            checkout_btn.style.backgroundColor = '#DB2D2E';
    
        } 
    }

    const submit_to_checkout = () => {
        window.location.assign('../carutopia/payment.html');
    }
