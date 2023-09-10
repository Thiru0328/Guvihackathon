/*
fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log("data:", data);
})
.catch((error)=> {
    console.log("error:", error);
});
*/

const searchBtn= document.getElementById("myInput")
const receipe=document.getElementById("receipe")

searchBtn.addEventListener('click', getReceipe());

function getReceipe(){
  let result = document.getElementById(searchBtn)
  document.innerHTML="result"

  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log("data:", data);
})
.catch((error)=> {
    console.log("error:", error);
}); 

}






