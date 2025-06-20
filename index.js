function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare;
    if (distance <= 400) {
        fare = 0;
    } else if (distance <= 2000) {
        fare = (distance - 400) * 0.02;
    } else if (distance <= 2500) {
        fare = 25;
    } else {
        fare = 'cannot travel that far';
    }
    return fare;
}