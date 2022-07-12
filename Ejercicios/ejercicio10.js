// Para mejorar la productividad de la tienda en la que trabajamos, vamos a crear una pequeña máquina que calcula el mínimo número de monedas que debemos usar para dar el cambio de una compra en metálico

// Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente y la función nos da un array con la combinación de monedas mínimas que debemos usar para conseguirlo.

// La dificultad del reto está en saber utilizar correctamente una estructura que te permita conocer las monedas que tienes disponible para crear el array con la devolución, ya que debes usar siempre el menor número de monedas posible. ¡Suerte 👩‍💻👨‍💻!.

function getCoins(change) {
    let coins = [1, 2, 5, 10, 20, 50]
    let changeCoins = [...coins].fill(0)

    coins.reverse().forEach((coin, i) => {
        if(change && (change % coin) >= 0 && coin <= change){
            changeCoins[i] = Math.floor(change / coin)
            change -= (coin * Math.floor(change / coin))
        }
    });
    return changeCoins.reverse()
}

console.log(getCoins(51), getCoins(100))