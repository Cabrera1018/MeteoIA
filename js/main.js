function GetInfo() {
    //Pa pedir la info
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=13.677&lon=-89.280&appid=9d86a10c94b9152686ecb282e6916e58')
    .then(response => response.json())
    .then(data => {
    
        //Maximo y minimo
        for(i = 0; i<5; i++){
            document.getElementById("day" + (i+1) + "Min").innerHTML = Number(data.list[i].main.temp_min - 273.00).toFixed(1)+ "°C";
            
        }
    
        for(i = 0; i<5; i++){
            document.getElementById("day" + (i+1) + "Max").innerHTML = Number(data.list[i].main.temp_max - 265.15).toFixed(2) + "°C";
        }
        console.log(data)
    })
    
    //Error
    .catch(err => alert("Error, intentalo de nuevo"))
    }

    
    //Para la semana
    var d = new Date();
    var weekday = ["Domingo", "Lunes", "Martes", "Miércoles", "Thursday", "Viernes", "Sabado",];
    
    //Para saber que nombre del día debe de elegir la API
    function CheckDay(day){
        if(day + d.getDay() > 6){
            return day + d.getDay() - 7;
        }
        else{
            return day + d.getDay();
        }
    }
    
        for(i = 0; i<5; i++){
            document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
        }