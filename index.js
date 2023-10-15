let hq = 42
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - hq)
}
function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue)
    return Math.abs((someValue - hq) * 264)
}
 
function distanceTravelledInFeet(start, destination) {
    let distance = Math.abs((start - destination) * 264)
    return distance
}
let fare
function calculatesFarePrice(start, destination) {
    let distance = Math.abs((start - destination) * 264)
    let fare = (distance - 400) * 0.02
    if (distance < 400)
    return 0
    else if (distance > 400 && distance < 2000) {
    return fare
    }
    else if (distance >= 2000 && distance <= 2500)
    return 25
    else if ( distance > 2500)
    return 'cannot travel that far'
}