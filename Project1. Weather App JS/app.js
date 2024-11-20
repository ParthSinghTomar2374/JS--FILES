const API_KEY = `a0a149ceef354c91b8f174012241711`
const form = document.querySelector("form")
const search = document.querySelector("#searchji")
const weather = document.querySelector("#imgandtext")



const getthedata = async(city)=>{
 weather.innerHTML =   `<h2> Loading... <h2>`
const url = `http://api.weatherapi.com/v1/current.json?key=a0a149ceef354c91b8f174012241711&q=${city}&aqi=no`
const respond = await fetch(url)
const data = await respond.json()
nobelworkmate(data)
}



const nobelworkmate = (data)=>{
    if (data.code=="404"){
        weather.innerHTML=`<h2>City not found...</h2>`
        return;
    }
    weather.innerHTML=` <div id="imgandtext">
            
            <div class="tempe">
                <h2>${data.current.temp_c} °C</h2>
                <h3>${data.current.condition.text}</h3>
            </div>
        </div>`
}




form.addEventListener(
    "submit", 
    function(event){
       getthedata(search.value)
        event.preventDefault();
    }
)