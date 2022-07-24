var value=0;

const ratingComponent=document.querySelector(".rating-container");

const rating1=document.querySelector(".rating-1");
const rating2=document.querySelector(".rating-2");
const rating3=document.querySelector(".rating-3");
const rating4=document.querySelector(".rating-4");
const rating5=document.querySelector(".rating-5");

const ratings=[rating1, rating2, rating3, rating4, rating5];



function takevalue(elemento){
    
    if (elemento.classList.contains('divie')){
    elemento.classList.replace('divie', 'borange');}
    else {
        elemento.classList.replace('borange', 'divie')
        value=0;
    }
    let counter=0
    for(rating of ratings){
        if (elemento === rating){}
        else{
            if(rating.classList.contains("borange")){
                rating.classList.replace('borange', 'divie')
            }
        }

        if (rating.classList.contains('borange')){
            counter++;
        }
    } 

    if (counter == 0){
        value=0;
    }else{
    value=parseInt(elemento.innerText);}
    

}




rating1.addEventListener('click',()=> {takevalue(rating1)})
rating2.addEventListener('click',()=> {takevalue(rating2)})
rating3.addEventListener('click',()=> {takevalue(rating3)})
rating4.addEventListener('click',()=> {takevalue(rating4)})
rating5.addEventListener('click',()=> {takevalue(rating5)})


const button= document.querySelector('.submit');



function validationScore(){

    const thankyou=`<div class='img'>
                    </div>
                    <div class='messageSelct'>
                        <p>You selected ${value} out of 5</p>
                    </div> 
                    <div class="finalMessage">
                    <h2>Thank you!</h2>
                    <p>We appreciate you taking the time to give a rating
                    .If you ever need more support don't hesitate to get in touch!</p>
                    </div>`    

    if (value > 0){
        ratingComponent.innerHTML=thankyou;
    } else {
        console.log("debe seleccionar un valor al menos")
    }
}

button.addEventListener('click', ()=> {validationScore()})