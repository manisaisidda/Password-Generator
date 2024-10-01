let inputSlider=document.getElementById("inputSlider");
let sliderValue=document.getElementById("sliderValue");
let passBox=document.getElementById("passBox");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let numbers=document.getElementById("numbers");
let symbols=document.getElementById("symbols");
let genBtn=document.getElementById("genBtn");
let copyIcon=document.getElementById("copyIcon")

sliderValue.textContent=inputSlider.value;

inputSlider.addEventListener('input',()=>{
    sliderValue.textContent=inputSlider.value;
});

genBtn.addEventListener('click',()=>{
    passBox.value=generatePassword();
}) ;
 
 let UpperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let allnumber="0123456789";
 let allsymbol="~!@#$%^&*";
 let lowerChars="abcdefghijklmnopqrstuvwxyz";
//Function to generate Password

function generatePassword()
{
    let genPassword="";

    let allChars="";
     
    
     allChars +=lowercase.checked ? lowerChars:"";
     allChars +=uppercase.checked ? UpperChars:"";
     allChars +=numbers.checked ? allnumber:"";
     allChars +=symbols.checked ? allsymbol:"";
      
 

     if(allChars.length==0)
     {
        return genPassword;
     }

    for(let i=0;i<inputSlider.value;i++)
    {
     genPassword+=allChars.charAt(Math.floor(Math.random()*allChars.length));
    
    }
    
    return genPassword;
}
copyIcon.addEventListener('click',()=>{
    if(passBox.value !=""||passBox.value.length>=1)
    {

    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText="check";
    copyIcon.title="Password Copied"
    setTimeout(()=>{
        copyIcon.innerHTML="content_copy";
        copyIcon.title="";
    },3000);
    }
})