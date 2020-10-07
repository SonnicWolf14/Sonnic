

$.getJSON("https://api.openweathermap.org/data/2.5/onecall?lat=-25.747868&lon=28.229271&units=metric&exclude=hourly,daily&appid=941d782ceb3efaae620cad4478568ca1", function(data){
    console.log(data);

    var icon = "https://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png";
    var weather = data.current.weather[0].description;
    var temp='Temp:' + data.current.temp;
    var real_feel= 'Feels like:' + data.current.feels_like;
    $(".icon").attr("src", icon);
    $('.weather').append(weather);
    $('.temp').append(temp);
    $('.real-feel').append(real_feel);
});