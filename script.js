// access the elements
const inputEle=document.getElementById('location-input')
const btnEle=document.getElementById('btn')
const iconEle=document.getElementById('icon')
const tempEle=document.getElementById('temp')
const weatherEle=document.getElementById('weather-info')
const locationEle=document.getElementById('location-info')

//storing the api key
 const apikey='9e6ab69cdd86478baa4096c24f39d147'
 //functionality
 btnEle.onclick=function(){
    if(inputEle.value==''){
        alert('please enter the location')
    }
    else{
        let loc=inputEle.value
        url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`
        // fetching the data from api and convrted into json format
        fetch(url).then(res=>res.json())
        .then(data=>{
          console.log(data)  
          const{name}=data
          const{feels_like}=data.main
          const{description}=data.weather[0]
          locationEle.innerText=name
          tempEle.innerText=Math.floor(feels_like-273)
          weatherEle.innerText=description
          
        })
        // reject state
        .catch(()=>{
            alert('invalid location')
        })
        inputEle.value==''
    }
 }