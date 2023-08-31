const weatherCode=(code:number )=>{
    if (code >= 0 && code <= 2) {
        return "clear-day"
    } else if(code==3){
        return "partly-cloudy-day"
    } else if(code==5){
        return "fog"
    } else if(code>=6 && code<=9){
        return "dust"
    } else if(code>=10 && code<=12){
        return "mist"
    } else if(code>=13 && code<=18){
        return "thunderstorms-rain"
    } else if(code==19){
        return "hurricane"
    } else{
        return 'hurricane'
    }
    
}

function formatDate(inputDate:any) {
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  
    const date = new Date(inputDate);
    const dayOfWeek = daysOfWeek[date.getUTCDay()];
    const dayOfMonth = date.getUTCDate();
  
    return `${dayOfWeek} ${dayOfMonth}`;
  }

async function weather(){
    const url =
    'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=Europe%2FMoscow';

    const res = await fetch(url);

    const data = await res.json();

    let newObj:any = {
        current: {
            temperature: Math.round(data.current_weather.temperature),
            day:formatDate(data.current_weather.time)
        },
        week:[]
    }

    

    for (let i = 0; i < data.daily.time.length; i++) {
        const day=formatDate(data.daily.time[i]);
        const temperature=Math.round((data.daily.temperature_2m_max[i]+data.daily.temperature_2m_min[i])/2)
        const weatherType=weatherCode(data.daily.weathercode[i])
        newObj.week.push({
            day,
            temperature,
            weatherType
        })
    }

    console.log()
    console.log(data)
    console.log('new',newObj)

    return {newObj}
}
export default weather;