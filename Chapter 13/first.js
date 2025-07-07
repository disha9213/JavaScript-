// The url is not working now so it is showing an error so here another ur is used but the innertext is not there
 const URL= "https://catfact.ninja/fact";


const factPara = document.querySelector("#fact"); //selecting an Id


// !!!! DONE THROUGH ASYNC-AWAIT !!!!!!
const getFacts=async ()=>{
    console.log("Fetching Data....")
    let response= await fetch(URL);  //response from the api; basically it is fetching the data from the api
    //console.log(response.status)  //status=200 therefore all OK   //It is in JSON format
    console.log(response);
    let data = await response.json(); //returns the 2nd promise ; We make this data into the readable format using json()
    console.log(data); //Data of an index
    factPara.innerText = data.fact //Used to print the text or the fact of the API 
}

// //  !!!! DONE FROM PROMISE CHAIN !!!!
// function getFacts(){
//     fetch(URL).then((response)=>{
//       return response.json();
//     })
//    .then((data)=>{
//     console.log(data);
//     factPara.innerText = data.fact
//    })
// }

const btn = document.querySelector("#button");
btn.addEventListener("click", getFacts);
