// https://geo.ipify.org/api/v2/country?apiKey=at_2nKUG70FDc42eF0S1Wo7CraMOYU1K&ipAddress=8.8.8.8

const getIPData = async () => {
    const url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_2nKUG70FDc42eF0S1Wo7CraMOYU1K"
    fetch(url)
    // const res = await fetch(url)
    // console.log(res)
        // .then(res => console.log(res))
        .then(res => res.json())
        .then(data => console.log(data))
    // console.log("good")
}

getIPData()