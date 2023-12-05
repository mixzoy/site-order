
function incrementCounter() {
    var counterElement = document.getElementById("counter");
    var counterValue = parseInt(counterElement.value);
    const total = document.querySelector('.buy__form-total span')
    counterValue++;
    total.innerHTML = parseInt(total.innerHTML) + 4999
    counterElement.value = counterValue;
}

function decrementCounter(){
    var counterElement = document.getElementById("counter");
    var counterValue = parseInt(counterElement.value);
    const total = document.querySelector('.buy__form-total span')
    if (counterValue == 1) {
        return
    }
    total.innerHTML = parseInt(total.innerHTML) - 4999
    counterValue--;
    counterElement.value = counterValue;
}


async function fetchDelivery(_tariff_code,  city_code){

    const url = `http://127.0.0.1:8000/api/sdek/${_tariff_code}/${city_code}`
    const response = await fetch(url, {
        method: "GET",
    })

    if (response.ok) {
         return await response.json()
    }
    else {
        console.log(response.status)
    }
}


const addressInput = document.querySelector("#adress-input")

const regions_lst = document.querySelector('#region-lst')

const region_input = document.querySelector('#region-input')
regions.forEach(region => {
    regions_lst.innerHTML += `<option value="${region.region}"></option>`;
});

region_input.addEventListener('input', (e)=> {
    
    let code_region = 0
    regions.forEach(region => {
        if (region.region == e.target.value) {
            code_region = region.region_code
        }
    })
    console.log(code_region)

    if(code_region != 0){
        const location_lst = document.querySelector('#location-lst')
        while (location_lst.firstChild) {
            location_lst.removeChild(location_lst.firstChild);
        }

        cities.forEach(city => {
            if (city.region_code === code_region){
                location_lst.innerHTML += `<option value="${city.city}"></option>`
                console.log(city.city)
            }
        })
    }
})



document.querySelector('#location-input').addEventListener('input', async (e) => {

    let city_code = 0;
    cities.forEach(city=> {
        if(city.city == e.target.value){
            city_code = city.code
        }
    })


    e.target.setAttribute('code', city_code)

    if(city_code!=0){
        e.target.setAttribute('code', city_code)

        let response = await fetchDelivery(136, city_code)

        if (response.hasOwnProperty('total_sum')) {
            const price_delivery = document.querySelector('#price-delivery')
            price_delivery.innerHTML =   " + " + response['total_sum']
        }

        console.log(response)
    }
})

const location_lst = document.querySelector('#location-lst')
while (location_lst.firstChild) {
    location_lst.removeChild(location_lst.firstChild);
}

cities.forEach(city => {
   location_lst.innerHTML += `<option value="${city.city}"></option>`
})
