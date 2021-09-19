// Напишите функцию, удаляющую наименьший элемент в массиве. Не изменяйте исходный массив
// Если есть несколько элементов с одинаковым значением, удалите один с меньшим индексом.
// Если вы получили пустой массив, верните пустой массив.

/**
 * 
 * @param {*} numbers массив
 * @returns массив с удаленным элементом
 */
 function removeSmallest(numbers) {
    let newArr = numbers;

    if (!numbers.length) {
        return [];
    }
    newArr.splice(newArr.indexOf(Math.min(...new Set(newArr))), 1);

    return newArr;
}

module.exports.removeSmallest = removeSmallest;


