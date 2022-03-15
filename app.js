// https://geo.ipify.org/api/v2/country?apiKey=at_2nKUG70FDc42eF0S1Wo7CraMOYU1K&ipAddress=8.8.8.8

//LEAFLET MAP
var map = L.map('map').setView([51.505, -0.09], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker = L.marker([51.5, -0.09]).addTo(map)


//FETCH FROM GEO.IPIFY
const getIPData = async (ip) => { 
    const url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_2nKUG70FDc42eF0S1Wo7CraMOYU1K" + ip
    fetch(url)
        .then(res => res.json())
        .then(data => handleData(data))
}

//GRAB IP FROM THE FORM AND SEND TO FETCH
const query = document.forms[0]
query.addEventListener('submit', function(e){
  e.preventDefault()
  const ip = "&ipAddress=" + query.querySelector('input[type="text"]').value.trim()
  // console.log(ip)
  getIPData(ip)
})


//UPDATE DOM WITH IP DATA
const handleData = (data) => {

  //DESTRUCTURE DATA
  const { ip, isp } = data
  const { city, region, postalCode, timezone, lat, lng } = data.location

  //ASSIGN TEXT DATA VALUES
  document.querySelector('#ip-address').textContent = ip
  document.querySelector('#location').textContent = `${city}, ${region}, ${postalCode}`
  document.querySelector('#timezone').textContent = `UTC ${timezone}`
  document.querySelector('#ISP').textContent = isp

  //ASSIGN LOCATION VALUES
  map.setView([lat, lng], 5)
  marker.setLatLng([lat, lng])
}