async function getHotelData() {
    try {
        const response = await fetch('../hotel.json')
        return await response.json()//return the json object
    } catch (error) {
        console.error(error)
    }
}

let hotelData = {}
getHotelData().then(data => hotelData = data)
//store in a variable document.querySelector("#a")
//use that variable to loop over each element and addeventlistener to each one i suggest using foreach
document.querySelector("#marriott").addEventListener('click', hotelInfo)
document.querySelector("#sheraton").addEventListener('click', hotelInfo)
document.querySelector("#hilton").addEventListener('click', hotelInfo)

function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase() 
    })
    let image = document.createElement("img")
    image.src= hotelChoice.picture;
    document.querySelector("#hotelName").textContent = `${hotelChoice.name} hotel`
    document.querySelector("#address").textContent = `${hotelChoice.address}`
    document.querySelector("#rooms").textContent = `${hotelChoice.rooms}`
    document.querySelector("#gym").textContent = `${hotelChoice.gym}`
    document.querySelector("#roomTypes").textContent = `${hotelChoice.roomTypes}`
    document.getElementById('picture').appendChild(image)  
}


// let myImageTag = document.createElement("img");
// myImageTag.src = "images/serenade.jpg";
// document.getElementById('myCards').appendChild(myImageTag);