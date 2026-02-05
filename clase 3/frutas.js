const frutas = ['manzana', 'pera', 'manzana', 'uva', 'pera', 'manzana'];
let conteoFrutas = {};
let conteoFrutasWhile = {};

for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        conteoFrutas[fruta] = 1;
    }
}

console.log(conteoFrutas);

let o = 0;
while(o < frutas.length){
    let fruta = frutas[o];
    if (conteoFrutasWhile[fruta]){
        conteoFrutasWhile[fruta] ++;
    } else {
        conteoFrutasWhile[fruta] = 1
    }
    o ++;
}

console.log(conteoFrutasWhile);
