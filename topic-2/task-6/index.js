/**
 * Задача 6 - Третье измерение
 * Круги кругами, а интересно какой объем у цилиндра.
 * Только вот тут хотелось бы ещё и точность вычислений настроить.
 * Реализуйте логику константы miniMathLibExtended
 * Константа должна содержать функцию volume
 *
 * Реализуйте функцию, которая возвращает модифицированный miniMathLibExtended
 * в которую передается значение Пи, необходимое для расчетов
 * */
const miniMathLibExtended = {
    pi: 3.14,
    volume: function(radius, height){
        return this.pi * radius * radius * height;
    }
}

function cylinderVolumeAccurate(pi){
    return miniMathLibExtended.bind({pi: 3.1415})
}