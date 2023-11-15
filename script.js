// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0e7c2b2bb4msh0cd14b3a0d54877p13e5bbjsn6f8817e4c35e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
const getWeather=(city)=>{
	cityName.innerHTML=city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,options)
    .then(response=>response.json())
    .then((response)=>{

		console.log(response)

		cloud_pct.innerHTML = response.cloud_pct
		temp1.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity1.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = (new Date(response.sunrise*1000)).toLocaleTimeString("default")
		sunset.innerHTML = (new Date(response.sunset*1000)).toLocaleTimeString("default")
		temp2.innerHTML = response.temp
		humidity_.innerHTML = response.humidity
		
		// let dateObj = new Date(sunrise.innerHTML.value * 1000);
		// let utcString = dateObj.toUTCString();
		// let sunrise_R = utcString.slice(-11, -4);
		// console.log(sunrise_R);
		
		

	})
    .catch(err=>console.error(err));
}



// submit.addEventListenter("click", (e)=>{
// 	e.preventDefault()
// 	getWeather(city.value)
// })

function myfunction(e){
	// e.preventDefault()
	getWeather(city.value)
}

getWeather("Bengaluru")


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi',options)
    .then(response=>response.json())
    .then((response)=>{

		console.log(response)

		cloud_pct_s.innerHTML = response.cloud_pct
		temp_s.innerHTML = response.temp
		feels_like_s.innerHTML = response.feels_like
		humidity_s.innerHTML = response.humidity
		min_temp_s.innerHTML = response.min_temp
		max_temp_s.innerHTML = response.max_temp
		wind_speed_s.innerHTML = response.wind_speed
		wind_degrees_s.innerHTML = response.wind_degrees
		sunrise_s.innerHTML = (new Date(response.sunrise*1000)).toLocaleTimeString("default")
		sunset_s.innerHTML = (new Date(response.sunset*1000)).toLocaleTimeString("default")
		})
    .catch(err=>console.error(err));



	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai',options)
    .then(response=>response.json())
    .then((response)=>{

		console.log(response)

		cloud_pct_b.innerHTML = response.cloud_pct
		temp_b.innerHTML = response.temp
		feels_like_b.innerHTML = response.feels_like
		humidity_b.innerHTML = response.humidity
		min_temp_b.innerHTML = response.min_temp
		max_temp_b.innerHTML = response.max_temp
		wind_speed_b.innerHTML = response.wind_speed
		wind_degrees_b.innerHTML = response.wind_degrees
		sunrise_b.innerHTML = (new Date(response.sunrise*1000)).toLocaleTimeString("default")
		sunset_b.innerHTML = (new Date(response.sunset*1000)).toLocaleTimeString("default")
		})
    .catch(err=>console.error(err));

	

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow',options)
    .then(response=>response.json())
    .then((response)=>{

		console.log(response)

		cloud_pct_l.innerHTML = response.cloud_pct
		temp_l.innerHTML = response.temp
		feels_like_l.innerHTML = response.feels_like
		humidity_l.innerHTML = response.humidity
		min_temp_l.innerHTML = response.min_temp
		max_temp_l.innerHTML = response.max_temp
		wind_speed_l.innerHTML = response.wind_speed
		wind_degrees_l.innerHTML = response.wind_degrees
		sunrise_l.innerHTML = (new Date(response.sunrise*1000)).toLocaleTimeString("default")
		sunset_l.innerHTML = (new Date(response.sunset*1000)).toLocaleTimeString("default")
		
	})
    .catch(err=>console.error(err));


