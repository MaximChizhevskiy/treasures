var width = 800
var height = 800
var clicks = 0
var limitsOfClick = 20

var getRandomNumber = function (size) {
    return Math.floor(Math.random() * size)
}

var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
}

var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x
    var diffY = event.offsetY - target.y
    return Math.sqrt((diffX*diffX) + (diffY*diffY))
}

var getDistanceHint = function (distance) {
    if (distance < 20) {
        return "Обожжешься!";
    } else if (distance < 30) {
        return "Очень-очень горячо";
    } else if (distance < 40) {
        return "Очень горячо";
    } else if (distance < 80) {
        return "Горячо";
    } else if (distance < 160) {
        return "Тепло";
    } else if (distance < 320) {
        return "Холодно";
    } else if (distance < 480)
        return "Очень холодно";
    else if (distance < 640) {
        return "Очень-очень холодно";
    } else {
        return "Замерзнешь!";
    }
}

$("#map").click(function (event) {
    clicks++
    limitsOfClick--
    var distance = getDistance(event,target)
    var distanceHint = getDistanceHint(distance)
    $("#distance").text(distanceHint)
    $("#clicksLeft").text("Осталось кликов " + limitsOfClick)

    if (limitsOfClick <= 0) {
        $("#heading").text("Клад, не найден")
        $("#clicksLeft").text("Осталось кликов 0")
        $("#distance").text('')
    }

    if (distance < 16) {
        $("#heading").text("Клад найден!")
        alert("Клад найден! Сделано кликов " + clicks)
    }
})

