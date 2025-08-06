let img=document.querySelector("#ratatouile");
let arrastrando=false;
let rect = img.getBoundingClientRect();
let centroImgX = rect.left + rect.width / 2;

img.addEventListener('click', e => {
    arrastrando=!arrastrando;
    if(arrastrando==true)
    {
        img.style.cursor='grabbing';
    }else
    {
        img.style.cursor='grab';
    }
});


document.addEventListener("mousemove", e =>{
    if(arrastrando)
    {
    img.style.top = (e.clientY - img.offsetHeight / 2) + 'px';
    img.style.left = (e.clientX - img.offsetWidth / 2) + 'px';
        if(e.clientX < centroImgX)
        {
            img.style.transform='scaleX(-1)';
        }else if(e.clientX > centroImgX)
        {
            img.style.transform='scaleX(1)';
        }
    }
});




