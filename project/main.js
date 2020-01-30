let objeto = {a: 1, b: 2};
let miArray = [];
for(i= 0; i< 30 ; i++){
    let nuevo = {...objeto};
    objeto.a = objeto.a + 1;
    miArray.push(nuevo)
}

miArray.forEach(element => {
    console.log(element)
});