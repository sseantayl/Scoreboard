// 1. Store each score in a variable, homeScore and guestScore
// 2. Find the string where the score should be displayed by ID (home-score and guest-score)
// 3. Make each button increment the score variable, homeScore or guestScore
// 4. Onclick, display each score in the right string, home-score or guest-score
// 5. Create an if function comparing homeScore and guestScore to find which one is higher
// 6. For the higher value, change CSS property to color: var(--success0color)

// Storing initial score
let homeScore = 0
let guestScore = 0

// Setting text content to initial score
document.getElementById("home-score").textContent = homeScore
document.getElementById("guest-score").textContent = guestScore

function homeAdd1() {
    homeScore += 1
    console.log(homeScore)
    document.getElementById("home-score").textContent = homeScore
}

function homeAdd2() {
    homeScore += 2
    console.log(homeScore)
    document.getElementById("home-score").textContent = homeScore
}

function homeAdd3() {
    homeScore += 3
    console.log(homeScore)
    document.getElementById("home-score").textContent = homeScore
}

function guestAdd1() {
    guestScore += 1
    console.log(guestScore)
    document.getElementById("guest-score").textContent = guestScore
}

function guestAdd2() {
    guestScore += 2
    console.log(guestScore)
    document.getElementById("guest-score").textContent = guestScore
}

function guestAdd3() {
    guestScore += 3
    console.log(guestScore)
    document.getElementById("guest-score").textContent = guestScore
}

