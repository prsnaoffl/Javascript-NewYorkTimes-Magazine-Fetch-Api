let container=document.createElement("div")
container.className="container";
document.body.appendChild(container);

let container2=document.createElement("row")
container2.className="row";
container.appendChild(container2);


let dates=new Date();
let days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
let months=["janauary","february","march","april","may","june","july","august","september","october","november","december"];
let day=days[dates.getDay()];
let month=months[dates.getMonth()];
let date=dates.getDate();
let year=dates.getFullYear();

//!async func:
apicall();
async function apicall(){
    try{
let url=`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=xFIafMFToatVwIS4Wbx6wNKNEtrnOoJd`;
let response=await fetch(url)
let data=await response.json();
    console.log(data);
    for(let i=0;i<data.results.length; i++){
        let card=document.createElement("div");
card.setAttribute("class","card");
container.appendChild(card);

let cardRow=document.createElement("row");
cardRow.setAttribute("class","row");
card.appendChild(cardRow);

let cardCol=document.createElement("div");
cardCol.setAttribute("class","col-md-8 ");
cardRow.appendChild(cardCol);

let card_body=document.createElement("div");
card_body.setAttribute("class"," cardbody")


let cardtitle=document.createElement("h4");
cardtitle.setAttribute("class","card-title");
cardtitle.innerText="HOME";
card_body.appendChild(cardtitle);


let subheading=document.createElement("p");
subheading.setAttribute("class","subHead");
subheading.innerHTML= data.results[i].title
card_body.appendChild(subheading);

//!date:
let dateHead=document.createElement("h5");
dateHead.setAttribute("class","dateHead");
card_body.appendChild(dateHead);

let cardtext2=document.createElement("p");
cardtext2.setAttribute("class","card-text ");
cardtext2.innerHTML=data.results[i].abstract;
card_body.appendChild(cardtext2);

// let cardsmall=document.createElement("small");
// cardsmall.setAttribute("class","card-text ");
// cardsmall.innerText="smallcontent";
// cardtext2.appendChild(cardsmall);

cardCol.appendChild(card_body);

let cardCol1=document.createElement("div");
cardCol1.setAttribute("class","col-md-4 ");
cardRow.appendChild(cardCol1);

let linkContinue=document.createElement("a");
linkContinue.setAttribute("class","linkContinue")
linkContinue.setAttribute("target","_blank")
linkContinue.innerText="Continue Reading...";
linkContinue.setAttribute("href",data.results[i].url);
card_body.appendChild(linkContinue);

let img=document.createElement("img");
img.setAttribute("class","img-thumbnail");
img.setAttribute("src",data.results[i].multimedia[0].url);
img.setAttribute("alt","No Images");
cardCol1.appendChild(img);

(function (){
    const dates=new Date(data.results[0].published_date);
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December"];    
    let date=document.querySelector(".dateHead"); 
    date.setAttribute("class","text-bold  text-success") 
    date.innerText=months[dates.getMonth()]+" "+dates.getDate();  
   // let get= new Date(data.results[0].published_date);
   // let newdate=dates.toDateString()
    })();

    (function (){
        const dates=new Date(data.results[0].updated_date);
        let days=["sunday","monday","tuesday","Wednesday","thursday","friday","saturday"];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", 
        "September", "October", "November", "December"];    
        let date=document.querySelector(".para"); 
        // date.setAttribute("class","text-bold text-dark");
        date.innerText=days[dates.getDay()]+", "+months[dates.getMonth()]+", "+dates.getDate()+", "+dates.getFullYear();
    })();

    }
}
catch(err){
    console.log(err);
}

};






