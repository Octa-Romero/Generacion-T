const words = [
 'californication',
 'plataforma5',
 'black',
 'summer',
 'flea',
 'aeroplane',
 'peppers',
 'unlimited',
 'arcadium',
 'love',
 'getaway',
 'stadium',
 'quixoticelixer',
 'quarter',
 'snow',
 'dylan',
 'zephyr',
 'funky',
 'chili',
 'palmer',
 'succesfully',
 'desiredoue',
 'mindset'
];

function randomWords()
{
    let palabraAleatoria=words[Math.floor(Math.random() * words.length)];
    return palabraAleatoria;
}

let h1=document.querySelector("#randomWord");
let input=document.querySelector("#text");
let timeContainer=document.querySelector("#timeSpan");
let scoreContainer=document.querySelector("#score");
let palabraAleatoria="";
let time=10;
let score=0;

function addToDOM(){
    palabraAleatoria=randomWords();
    h1.textContent=palabraAleatoria;
}

addToDOM();

input.addEventListener("input", e =>{
    let palabraIngresada=e.target.value;
    if(palabraIngresada===palabraAleatoria)
    {
        time=time+3;
        timeContainer.textContent=time + "s";
        input.value="";
        updateScore();
        addToDOM();
    }
});

const intervalo=setInterval(actualizarTiempo,1000);

function actualizarTiempo()
{
    time--;
    if(time==0)
    {
        input.disabled="true";
        timeContainer.textContent=time + "s";
        clearInterval(intervalo);
        gameOver();
    }else
    {
        timeContainer.textContent=time + "s";
    }
}

function updateScore()
{
    score++;
    scoreContainer.textContent=score;
}

function gameOver()
{
    let container=document.querySelector("#end-game-container");
    let body=document.body;
    let h2=document.createElement("h2");
    let p=document.createElement("p");
    let btn=document.createElement("button");
    let br=document.createElement("br");
    h2.textContent="HAS PERDIDO CHAVALIN";
    p.textContent="Puntaje final: " + score;
    btn.textContent="Volvé a empezar";
    body.style.backgroundImage='url("https://i.pinimg.com/736x/9e/52/45/9e5245c76bd012bc89da97e70c6bb87a.jpg")'
    btn.onclick = () => {location.reload()};
    container.append(h2);
    container.append(br);
    container.append(p);
    container.append(br);
    container.append(btn);
}