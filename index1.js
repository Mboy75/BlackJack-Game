mySelf = {
    name: "Massi",
    age: 41,
    country: "Italy"
}

const logData = () => {
    console.log(mySelf.name + " is " + mySelf.age + " old " + "and lives in " + mySelf.country)
}
logData()

let age = 15

if ( age < 6 ) {
    return "free"
} else if ( age > 18 ) {
    return "child discount"

}else if ( age > 27 ) {
    return "student "

} else if ( age > 67 ) {
    return "full "
} else {
    return "senior "
}



let largeCountries = ["China", "India", "USA", "Indonisia", "Pakistan"]
largeCountries.pop()
largeCountries.push("Monaco")
largeCountries.unshift()
largeCountries.shift("Algeria")
console.log(largeCountries)
console.log("The largest countries in the word")
for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i]) 
}

let dayOfTheMonth = 13
let weekday = "Friday"
if (dayOfTheMonth === 13 && weekday === "Friday") {
    console.log("A")
}


let hands = [ "rock", "paper", "scissor"]
const getHand = () => {
    let RandomIndex = Math.floor(Math.random() * 3) 
    return hands [RandomIndex]
}
console.log( getHand() )