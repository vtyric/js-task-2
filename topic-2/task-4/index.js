/**
 * Задача 4 - вычислить площадь круга
 * Вам необходимо написать функцию circleArea, которая вычисляет площадь круга
 * Сама функция должна быть сохранена внутри константы miniMathLib
 * */

const miniMathLib = {
    pi: 3.14,
    circleArea: function(radius) {
        if (radius < 0) {
            throw new Error();
        }
        
        return this.pi * radius * radius;
    }
}


module.exports.miniMathLib = miniMathLib