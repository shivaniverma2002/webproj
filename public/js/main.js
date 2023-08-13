const cityName=document.getElementById('cityName');
const submitbtn=document.getElementById('submitbtn');
const city_name=document.getElementById('city_name');
const temp=document.getElementById('temp');
const temp_status=document.getElementById('temp_status')
const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
//    let url=`https://api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=92b84491f6a47abe98ddf47cd858364b`
    if(cityVal==="")
    {
        city_name.innerText=`please write the name before search`;
    }else{
        try{
    //  let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=045e7d970324418cc9a837f624dbef1a`
     let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=9eada137e14b3f9aa91523f6c8e879bf`;
      const response=await  fetch(url);
      const data=await response.json();
      const arrData=[data];
      city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
      temp.innerText=arrData[0].main.temp;
    //   temp_status.innerText=arrData[0].weather[0].main;
      const tempMood=arrData[0].weather[0].main;
      if(tempMood=="clear")
      {
        temp_status.innerHTML=
        "<i class='fa-solid fa-sun' style='color: #daf033;'></i>";
      }
     else if(tempMood=="clouds")
      {
        temp_status.innerHTML=
        "<i class='fa-solid fa-cloud' style='color: #aac3ee;'></i>";
      }
      if(tempMood=="Rain")
      {
        temp_status.innerHTML=
        "<i class='fa-solid fa-cloud-rain' style='color: #dee5f2;'></i>"
      }
      else
      {
        temp_status.innerHTML=
        "<i class='fa-solid fa-sun-haze' style='color: #eaeef6;'></i>"
      }
        }catch{
            city_name.innerText=`please write the name before search`;  
        }
    }
}
submitbtn.addEventListener('click',getInfo);
