function handleSubmit(e)
{
    e.preventDefault();
    let nombre=e.target.nombre.value;
    let genero=e.target.genero.value;
    let edad=+e.target.edad.value;
    let p=document.querySelector("#res");
    let container=document.querySelector("#container");
    mensaje=evaluarJubilacion(nombre, genero, edad);
    p.textContent=`${mensaje}`;
    container.style.visibility='visible';
}

function evaluarJubilacion(nombre, genero, edad){
    const jubiMujeres=60;
    const jubiHombres=65;
    let esMujer=false;
    let esHombre=false;
    if(genero === 'mujer')
    {
        esMujer=true;
    }else if(genero === 'hombre')
    {
        esHombre=true;
    }

    if(esMujer)
    {
        if(edad >= jubiMujeres)
        {
           return `Señora ${nombre}, usted esta habilitada a jubilarse`;
        }else
        {
           return `Señora ${nombre}, usted no esta habilitada a jubilarse`;
        }
    }

    if(esHombre)
    {
        if(edad >= jubiHombres)
        {
           return `Señor ${nombre}, usted esta habilitado a jubilarse`;
        }else
        {
           return `Señor ${nombre}, usted no esta habilitado a jubilarse`;
        }
    }
}
