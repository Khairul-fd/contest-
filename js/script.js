//==============Game part start==================//
//==============dom part start===================//
//===========banner part dom
let banner              =document.querySelector('.banner')
let game_start_button   =document.querySelector('.game_start_button')
//=========play buton dom
let play_button         = document.querySelector('.play_button')        
let play_button1        = document.querySelector('.play_button1')
//=====player one dom
let Playerone           = document.querySelector('.Playerone')
let Playeroneinput      = document.querySelector('.Playeroneinput')
let Playeronebutton     = document.querySelector('.Playeronebutton')
//=====player two dom
let Playertwo           = document.querySelector('.Playertwo')
let Playertwoinput      = document.querySelector('.Playertwoinput')
let Playertwobutton     = document.querySelector('.Playertwobutton')
//====player three dom
let Playerthree           = document.querySelector('.Playerthree')
let Playerthreeinput      = document.querySelector('.Playerthreeinput')
let Playerthreebutton     = document.querySelector('.Playerthreebutton')
//======others dom

let Playername          = document.querySelector('.Playername')
let error               = document.querySelector('.error')
let winner              = document.querySelector('.winner')
let result              = document.querySelector('.result')
let chancecount         = document.querySelector('.chancecount')
let chancecount1        = document.querySelector('.chancecount1')
let chance              = 0
let chance1             = 0
//=============dom part end=====================//
//=============function part===================//
chancecount.innerHTML = chance
chancecount1.innerHTML = chance1
//===========banner part function
game_start_button.addEventListener('click',()=>{
    if(''){

    }else{
        banner.style            ='display:none'
        play_button.style       ='display:block'
    }
})
//============play button function
play_button1.addEventListener('click',()=>{
    
    if(''){

    }else{
        play_button.style       ='display:none'
        Playerone.style         ='display:block'
        error.style             ='.display:block'
    }
})
//=======player one function
Playeronebutton.addEventListener('click',()=>{
    
    if(Playeroneinput.value == ''){
        error.innerHTML         ='Please Enter an value'
        error.style             = 'display:block'
    }else{
        if(Playeroneinput.value > 10) {
        error.innerHTML         = 'Please Input number under 10'
        }else{
        Playerone.style         = 'display:none'
        error.style             ='.display:block'
        error.innerHTML         = ''
        Playertwo.style         = 'display:block'
        Playername.innerHTML    = 'Player - 2'
        }
    }
})
//========player two function
Playertwobutton.addEventListener('click', ()=>{
    if(Playertwoinput.value == ''){
        error.innerHTML = 'Please Enter an value'
    }else{
        error.innerHTML = ''
        if(Playertwoinput.value > 10){
            error.innerHTML = 'Please Input number under 10'
        }else{
            if(Playeroneinput.value == Playertwoinput.value){
                winner.style = 'display:block'
                result.innerHTML = 'Player - 2 Win'
                Playertwo.style = 'disply:none'
                Playername.style = 'display:none'
            }else{
                chance++
                chancecount.innerHTML = chance
                if(chance == 5){
                    Playertwo.style         = 'display:none'
                    error.innerHTML         = ''
                    Playerthree.style         = 'display:block'
                    Playername.innerHTML    = 'Player - 3'
                }
            }
        }
    }
})

//==========player three function
Playerthreebutton.addEventListener('click', ()=>{
    if(Playerthreeinput.value == ''){
        error.innerHTML = 'Please Enter an value'
    }else{
        error.innerHTML = ''
        if(Playerthreeinput.value > 10){
            error.innerHTML = 'Please Input number under 10'
        }else{
            if(Playeroneinput.value == Playerthreeinput.value){
                winner.style = 'display:block'
                result.innerHTML = 'Player - 3 Win'
                Playerthree.style = 'disply:none'
                Playername.style = 'display:none'
            }else{
                chance1++
                chancecount1.innerHTML = chance1
                if(chance1 == 5){
                    winner.style = 'display:block'
                    result.innerHTML = 'Player - 1 Win'
                    Playerthree.style = 'disply:none'
                    Playername.style = 'display:none'
                }
            }
        }
    }
})
//------------------------game part end------------------//
//=======================to do list start===================//
// ========================Dom part start====================//
let to_do               =document.querySelector(".to_do")
let to_do_list_play     =document.querySelector(".to_do_list_play")
let addInput            = document.querySelector(".addInput")
let addTaskButton       = document.querySelector (".addTaskButton")
let AddedTaskCard       = document.querySelector (".AddedTaskCard")
// let editButton          = document.querySelector (".editButton")
// ========================Dom part end======================//
// ========================Function part start===========//
//===================to do go button function============//
to_do_list_play.addEventListener('click',()=>{
if(''){

}else{
    banner.style            ='display:none'
    to_do.style             ='display:block' 
}
})

//================to do function===================//
addTaskButton.addEventListener ("click",()=>{
if (addInput.value == ""){
    alert ("Enter Task")
}
else{
    //===================New Element================//
    let addedtaskFiled      = document.createElement ('div')
     let taskInput          = document.createElement ("input")
     let buttonCard         = document.createElement ("div")
     let editButton         = document .createElement ("button")
     let deleteButton       = document.createElement ("button")
// =======================make child==============//
AddedTaskCard.appendChild (addedtaskFiled)
addedtaskFiled.appendChild (taskInput)
addedtaskFiled.appendChild (buttonCard)
buttonCard.appendChild (editButton)
buttonCard.appendChild (deleteButton)
// ====================add class name===========//
addedtaskFiled.classList.add("addedtaskFiled")
taskInput.classList.add ("taskInput")
buttonCard.classList.add("buttonCard")
editButton.classList.add("editButton")
deleteButton.classList.add("deleteButton")
// ================add content to the tag=====//
editButton.innerHTML="Edit"
deleteButton.innerHTML = "Delete"
// ===============add data to input field=======//
taskInput.value = addInput.value
addInput.value = ''
//===============input atribute==================//
taskInput.setAttribute('readonly' , 'readonly')
//===============Edit data=======================//
editButton.addEventListener('click' , ()=>{
    if(editButton.innerHTML=='Edit'){
        editButton.innerHTML='Save'
        editButton.style="color:white"
        input.removeAttribute('readonly', 'readonly');
    }
    else{
        editButton.innerHTML='Edit'
        input.setAttribute('readonly', 'readonly');
    }
})
//==============delete data===================//
deleteButton.addEventListener('click' , ()=>{
    addedtaskFiled.remove()
 })
 //================enter key function=============//
 let inputkey =(item)=>{
    if(item.key=='Enter'){
        inputclick()
    }
}
// =================add margin===============//
addedtaskFiled.style.margin = "10px 0"; 

}
})  
//----------------------to do list part end------------------// 