// ============================================
// LEVEL 2: TEST-DRIVEN DEVELOPMENT - JAVASCRIPT
// ============================================
// Тесты уже написаны — напишите код, который их пройдёт!
// Время выполнения: 60-80 минут
// ============================================

/*
🧪 TDD НА JAVASCRIPT

Те же задачи, что и в test_driven_level2.py, но на JavaScript!

💻 КАК ЗАПУСТИТЬ:
node test_driven_level2.js

Или в браузере (F12 → Console)
*/

console.log(`
📚 ИНСТРУКЦИЯ:

1. Прочитайте описание функции
2. Посмотрите на тесты
3. Напишите код
4. Запустите: node test_driven_level2.js
5. Исправьте ошибки
6. Повторяйте до зелёных тестов ✅
`);

// ============================================
// ЗАДАЧА 1: ШИФР ЦЕЗАРЯ
// ============================================

/**
 * Зашифровать текст шифром Цезаря
 *
 * @param {string} text - Текст для шифрования
 * @param {number} shift - Сдвиг
 * @returns {string} Зашифрованный текст
 *
 * Примеры:
 *   caesarCipher("abc", 3) → "def"
 *   caesarCipher("xyz", 3) → "abc"
 *   caesarCipher("Hello, World!", 5) → "Mjqqt, Btwqi!"
 *
 * 💡 ПОДСКАЗКИ:
 * - Используйте charCodeAt() и String.fromCharCode()
 * - 'a'.charCodeAt(0) = 97, 'z'.charCodeAt(0) = 122
 * - 'A'.charCodeAt(0) = 65, 'Z'.charCodeAt(0) = 90
 * - Формула: ((code - base + shift) % 26) + base
 */
function caesarCipher(text, shift) {
    // TODO: Напишите код здесь
    return "";
}

// Тесты для задачи 1
function testCaesarCipher() {
    console.log("\n🧪 Тесты для caesarCipher():");

    const tests = [
        ["abc", 3, "def"],
        ["xyz", 3, "abc"],
        ["Hello, World!", 5, "Mjqqt, Btwqi!"],
        ["abc", -1, "zab"],
        ["", 5, ""],
    ];

    tests.forEach(([text, shift, expected]) => {
        const result = caesarCipher(text, shift);
        const status = result === expected ? "✅" : "❌";
        console.log(`${status} caesarCipher("${text}", ${shift}) = "${result}"`);
        if (result !== expected) {
            console.log(`   Ожидалось: "${expected}"`);
        }
    });
}

// ============================================
// ЗАДАЧА 2: ПРОСТЫЕ ЧИСЛА (РЕШЕТО ЭРАТОСФЕНА)
// ============================================

/**
 * Найти все простые числа до n (включительно)
 *
 * @param {number} n - Верхняя граница
 * @returns {number[]} Список простых чисел
 *
 * Примеры:
 *   sieveOfEratosthenes(10) → [2, 3, 5, 7]
 *   sieveOfEratosthenes(20) → [2, 3, 5, 7, 11, 13, 17, 19]
 *
 * 💡 ПОДСКАЗКИ:
 * - Создайте массив: const isPrime = Array(n + 1).fill(true);
 * - isPrime[0] = isPrime[1] = false;
 * - Для i от 2 до √n: если isPrime[i], отметьте все кратные как false
 */
function sieveOfEratosthenes(n) {
    // TODO: Напишите код здесь
    return [];
}

// Тесты для задачи 2
function testSieveOfEratosthenes() {
    console.log("\n🧪 Тесты для sieveOfEratosthenes():");

    const tests = [
        [10, [2, 3, 5, 7]],
        [20, [2, 3, 5, 7, 11, 13, 17, 19]],
        [1, []],
        [2, [2]],
    ];

    tests.forEach(([n, expected]) => {
        const result = sieveOfEratosthenes(n);
        const status = JSON.stringify(result) === JSON.stringify(expected) ? "✅" : "❌";
        console.log(`${status} sieveOfEratosthenes(${n}) = [${result}]`);
        if (JSON.stringify(result) !== JSON.stringify(expected)) {
            console.log(`   Ожидалось: [${expected}]`);
        }
    });
}

// ============================================
// ЗАДАЧА 3: СОРТИРОВКА ПУЗЫРЬКОМ
// ============================================

/**
 * Отсортировать массив методом пузырьковой сортировки
 *
 * @param {number[]} numbers - Массив чисел
 * @returns {number[]} Отсортированный массив
 *
 * Примеры:
 *   bubbleSort([5, 2, 8, 1, 9]) → [1, 2, 5, 8, 9]
 *   bubbleSort([3, 3, 1]) → [1, 3, 3]
 *
 * 💡 ПОДСКАЗКИ:
 * - Копируйте массив: const arr = [...numbers];
 * - Два вложенных цикла
 * - Обмен: [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
 */
function bubbleSort(numbers) {
    // TODO: Напишите код здесь
    return [];
}

// Тесты для задачи 3
function testBubbleSort() {
    console.log("\n🧪 Тесты для bubbleSort():");

    const tests = [
        [[5, 2, 8, 1, 9], [1, 2, 5, 8, 9]],
        [[1], [1]],
        [[3, 3, 1], [1, 3, 3]],
        [[], []],
    ];

    tests.forEach(([numbers, expected]) => {
        const result = bubbleSort(numbers);
        const status = JSON.stringify(result) === JSON.stringify(expected) ? "✅" : "❌";
        console.log(`${status} bubbleSort([${numbers}]) = [${result}]`);
        if (JSON.stringify(result) !== JSON.stringify(expected)) {
            console.log(`   Ожидалось: [${expected}]`);
        }
    });
}

// ============================================
// ЗАДАЧА 4: ВАЛИДАЦИЯ СКОБОК
// ============================================

/**
 * Проверить, сбалансированы ли скобки
 *
 * @param {string} text - Текст для проверки
 * @returns {boolean} True если сбалансированы
 *
 * Примеры:
 *   isBalanced("()") → true
 *   isBalanced("([)]") → false
 *   isBalanced("{[]}") → true
 *
 * 💡 ПОДСКАЗКИ:
 * - Используйте стек (массив): const stack = [];
 * - Для открывающей: stack.push(char);
 * - Для закрывающей: stack.pop() и проверить соответствие
 * - const pairs = {'(': ')', '[': ']', '{': '}'};
 */
function isBalanced(text) {
    // TODO: Напишите код здесь
    return false;
}

// Тесты для задачи 4
function testIsBalanced() {
    console.log("\n🧪 Тесты для isBalanced():");

    const tests = [
        ["()", true],
        ["()[]  {}", true],
        ["(]", false],
        ["([)]", false],
        ["{[]}", true],
        ["", true],
    ];

    tests.forEach(([text, expected]) => {
        const result = isBalanced(text);
        const status = result === expected ? "✅" : "❌";
        console.log(`${status} isBalanced("${text}") = ${result}`);
        if (result !== expected) {
            console.log(`   Ожидалось: ${expected}`);
        }
    });
}

// ============================================
// ЗАДАЧА 5: АНАГРАММЫ
// ============================================

/**
 * Проверить, являются ли два слова анаграммами
 *
 * @param {string} word1 - Первое слово
 * @param {string} word2 - Второе слово
 * @returns {boolean} True если анаграммы
 *
 * Примеры:
 *   areAnagrams("listen", "silent") → true
 *   areAnagrams("hello", "world") → false
 *
 * 💡 ПОДСКАЗКИ:
 * - Убрать пробелы: word.replace(/ /g, "")
 * - Привести к нижнему регистру: word.toLowerCase()
 * - Сортировать: word.split('').sort().join('')
 */
function areAnagrams(word1, word2) {
    // TODO: Напишите код здесь
    return false;
}

// Тесты для задачи 5
function testAreAnagrams() {
    console.log("\n🧪 Тесты для areAnagrams():");

    const tests = [
        ["listen", "silent", true],
        ["hello", "world", false],
        ["Triangle", "Integral", true],
        ["a b c", "cba", true],
    ];

    tests.forEach(([word1, word2, expected]) => {
        const result = areAnagrams(word1, word2);
        const status = result === expected ? "✅" : "❌";
        console.log(`${status} areAnagrams("${word1}", "${word2}") = ${result}`);
        if (result !== expected) {
            console.log(`   Ожидалось: ${expected}`);
        }
    });
}

// ============================================
// БОНУСНАЯ ЗАДАЧА: FIBONACCI С МЕМОИЗАЦИЕЙ
// ============================================

/**
 * Вычислить n-ое число Фибоначчи с мемоизацией
 *
 * @param {number} n - Номер числа
 * @returns {number} n-ое число Фибоначчи
 *
 * Примеры:
 *   fibonacciMemo(10) → 55
 *   fibonacciMemo(20) → 6765
 *
 * 💡 ПОДСКАЗКИ:
 * - Используйте замыкание (closure) для хранения memo
 * - const memo = {};
 * - if (n in memo) return memo[n];
 */

// Вариант с замыканием
const fibonacciMemo = (function() {
    const memo = {};

    return function fib(n) {
        // TODO: Напишите код здесь
        return 0;
    };
})();

// Тесты для бонусной задачи
function testFibonacciMemo() {
    console.log("\n🧪 Тесты для fibonacciMemo() (БОНУС):");

    const tests = [
        [0, 0],
        [1, 1],
        [10, 55],
        [20, 6765],
    ];

    tests.forEach(([n, expected]) => {
        const result = fibonacciMemo(n);
        const status = result === expected ? "✅" : "❌";
        console.log(`${status} fibonacciMemo(${n}) = ${result}`);
        if (result !== expected) {
            console.log(`   Ожидалось: ${expected}`);
        }
    });
}

// ============================================
// ЗАПУСК ВСЕХ ТЕСТОВ
// ============================================

function runAllTests() {
    console.log("=".repeat(60));
    console.log("🧪 ЗАПУСК ТЕСТОВ TDD LEVEL 2 (JavaScript)");
    console.log("=".repeat(60));

    testCaesarCipher();
    testSieveOfEratosthenes();
    testBubbleSort();
    testIsBalanced();
    testAreAnagrams();
    testFibonacciMemo();

    console.log("\n" + "=".repeat(60));
    console.log("🏁 ВСЕ ТЕСТЫ ЗАВЕРШЕНЫ");
    console.log("=".repeat(60));
    console.log(`
💡 СОВЕТЫ ДЛЯ JAVASCRIPT:

1. **Массивы vs Объекты**
   - Массив: const arr = [1, 2, 3];
   - Объект: const obj = {key: "value"};

2. **Полезные методы массивов:**
   - .push(x) — добавить в конец
   - .pop() — удалить последний
   - .shift() — удалить первый
   - .unshift(x) — добавить в начало
   - .slice(start, end) — срез
   - .splice(index, count) — удалить элементы
   - .map(fn) — преобразовать
   - .filter(fn) — фильтровать
   - .reduce(fn, init) — свернуть

3. **Строки:**
   - .charAt(i) или [i] — символ по индексу
   - .charCodeAt(i) — код символа
   - String.fromCharCode(code) — символ из кода
   - .split('') — массив символов
   - .replace(old, new) — заменить
   - .toLowerCase() / .toUpperCase()

4. **Циклы:**
   - for (let i = 0; i < n; i++) {}
   - for (const item of array) {}
   - for (const key in object) {}
   - array.forEach((item) => {});

5. **Spread оператор:**
   - [...array] — копия массива
   - {...object} — копия объекта
   - [...array1, ...array2] — объединение

🎯 СЛЕДУЮЩИЙ ШАГ:
- Попробуйте те же задачи на C++ (test_driven_level2.cpp)
- Решайте задачи на LeetCode в JavaScript
- Изучайте современные фичи ES6+
- Практикуйтесь с async/await, Promises

🔥 ОТЛИЧНАЯ РАБОТА!
    `);
}

// Запуск при выполнении файла
runAllTests();
