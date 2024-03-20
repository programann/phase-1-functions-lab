// Code your solution in this file!
function distanceFromHqInBlocks(Hq) {
    if (Hq > 42){
        return Hq-42
    }
    else{
        return 42-Hq
    }
}

function distanceFromHqInFeet(feet){
 return distanceFromHqInBlocks(feet)*264
}
function distanceTravelledInFeet (start, destination) {
 if(start < destination){
    return (destination - start)*264
 }
 else{
    return (start - destination)*264
 }
}
 
function calculatesFarePrice(start, destination){
    let feet=distanceTravelledInFeet(start, destination)
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