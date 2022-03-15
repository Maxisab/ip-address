// https://geo.ipify.org/api/v2/country?apiKey=at_2nKUG70FDc42eF0S1Wo7CraMOYU1K&ipAddress=8.8.8.8

var map = L.map('map').setView([51.505, -0.09], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)




const getIPData = async (ip) => { 
    const url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_2nKUG70FDc42eF0S1Wo7CraMOYU1K" + ip
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))

}



const query = document.forms[0]

query.addEventListener('submit', function(e){
  e.preventDefault()
  const ip = "&ipAddress=" + query.querySelector('input[type="text"]').value
  console.log(ip)
  getIPData(ip)
    .then(data => console.log(ip))
})

// console.log(query)