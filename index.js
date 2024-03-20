// Code your solution in this file!
function distanceFromHqInBlocks(Hq) {
    if (Hq > 42){
        return Hq-42
    }
    else{
        return 42-Hq
    }
}

function distanceFromHqInFeet(blocks){
 return distanceFromHqInBlocks(blocks)*264
}
function distanceTravelledInFeet (pickUp, destination) {
 if(pickUp < destination){
    return (destination - pickUp)*264
 }
 else{
    return (pickUp - destination)*264
 }
}
 
function calculatesFarePrice(pickUp, destination){
    let feet=distanceTravelledInFeet(pickUp, destination)
    if (feet<400) {
        return 0
    }
    else if (feet>400 && feet<=2000 ){
        return (feet-400)*0.02
    }
    else if(feet>2000 && feet<=2500){
        return 25
    }
    else{
        return 'cannot travel that far'
    }
}