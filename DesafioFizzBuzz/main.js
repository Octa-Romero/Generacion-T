let numeros=[];
function cantNumeros(e)
{
    e.preventDefault();
    let cant=e.target.cant.value;
    let container=document.querySelector("#container");
    let p=document.querySelector("#res");
    let form1=document.querySelector("#form1");
    let form2=document.querySelector("#form2");
    let contenido=generarNumeros(cant);
    p.textContent=contenido;
    container.style.visibility='visible';
    if(cant>=20)
    {
    form1.style.visibility='visible';
    form2.style.visibility='visible';
    }
}

function generarNumeros(cant)
{
    if(cant<20)
    {
        return "Mensaje : Por lo menos ingrese un numero mayor a 20";
    }

    let contenido="";
    let num=1;
    for(let i=0;i<cant;i++)
    {
        if(num==cant)
        {
            contenido+= num + ".";
        }else{
            contenido+= num + ", ";
        }
        numeros[i]=num;
        num++;
    }
    return contenido;
}

function ingresoFizzBuzz(e)
{
    e.preventDefault();
    let fizz=e.target.string1.value;
    let buzz=e.target.string2.value;
    let num1=+e.target.num1.value;
    let num2=+e.target.num2.value;
    let contenido=reemplazarNumeros(fizz,buzz,num1,num2);
    let p=document.querySelector("#res");
    p.textContent=contenido;
}

function reemplazarNumeros(fizz,buzz,num1,num2)
{
    let contenido="";
    for(let i=0;i<numeros.length;i++)
    {
        if(numeros[i] % num1 == 0 && numeros[i] % num2 == 0)
        {
            numeros[i]=fizz+buzz;
        }else if(numeros[i] % num1 == 0)
        {
            numeros[i]=fizz;
        }else if(numeros[i] % num2 == 0)
        {
            numeros[i]=buzz;
        }
        if(i+1==numeros.length)
        {
            contenido+=numeros[i] + ".";
        }else
        {
        contenido+=numeros[i] + ", ";
        }
    }
    return contenido;
}

console.log(numeros);