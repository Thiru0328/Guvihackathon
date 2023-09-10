


let result= function generateQRcode(event) {
    event.preventDefault();
    const url=document.getElementById('url.value');
    const sizes=document.getElementById('sizes.value');
    const favcolor=document.getElementById('favcolor')
    const inputGroup=document.getElementById('inputGroup')
    
    if(url===''){
        alert("please enter your url");
    }else{
    }
    
};


const url= document.querySelector("url");
const generateBtn=document.querySelector("generate");
const downloadBtn=document.querySelector("download");


generateBtn.addEventListener("click",()=>{
    const qrCode= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example${url.value}`;

})

downloadBtn.addEventListener("click",async()=>{
    const response=await fetch();
    const blob=await response.blob();
    const downloadLink=document.createElement("a")
    downloadLink.href=URL.createObjectURL(blob);
    downloadLink.download="download.png"
    downloadLink.click()
})
