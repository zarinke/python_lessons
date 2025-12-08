#include <iostream>
#include <string>
#include <vector>
#include <map>
#include <algorithm>
#include <cctype>
using namespace std;

// ============================================
// LEVEL 2: TEST-DRIVEN DEVELOPMENT - C++
// ============================================
// Тесты уже написаны — напишите код, который их пройдёт!
// Время выполнения: 70-90 минут
// ============================================

/*
🧪 TDD НА C++

Те же задачи, что и в test_driven_level2.py, но на C++!

💻 КАК ЗАПУСТИТЬ:
Mac/Linux:
    g++ -o tests test_driven_level2.cpp
    ./tests

Windows:
    g++ -o tests.exe test_driven_level2.cpp
    tests.exe
*/

void separator(const string& text) {
    cout << string(60, '=') << endl << text << endl << string(60, '=') << endl;
}

// ============================================
// ЗАДАЧА 1: ШИФР ЦЕЗАРЯ
// ============================================

/**
 * Зашифровать текст шифром Цезаря
 *
 * Примеры:
 *   caesarCipher("abc", 3) → "def"
 *   caesarCipher("xyz", 3) → "abc"
 *   caesarCipher("Hello, World!", 5) → "Mjqqt, Btwqi!"
 *
 * 💡 ПОДСКАЗКИ:
 * - Проверяйте isalpha(c) — буква ли символ
 * - isupper(c) / islower(c) — регистр
 * - char('a' + ((c - 'a' + shift) % 26))
 */
string caesarCipher(const string& text, int shift) {
    // TODO: Напишите код здесь
    return "";
}

// Тесты для задачи 1
void testCaesarCipher() {
    cout << "\n🧪 Тесты для caesarCipher():\n";

    vector<tuple<string, int, string>> tests = {
        {"abc", 3, "def"},
        {"xyz", 3, "abc"},
        {"Hello, World!", 5, "Mjqqt, Btwqi!"},
        {"", 5, ""}
    };

    for (const auto& [text, shift, expected] : tests) {
        string result = caesarCipher(text, shift);
        string status = (result == expected) ? "✅" : "❌";
        cout << status << " caesarCipher(\"" << text << "\", " << shift << ") = \"" << result << "\"\n";
        if (result != expected) {
            cout << "   Ожидалось: \"" << expected << "\"\n";
        }
    }
}

// ============================================
// ЗАДАЧА 2: ПРОСТЫЕ ЧИСЛА (РЕШЕТО ЭРАТОСФЕНА)
// ============================================

/**
 * Найти все простые числа до n (включительно)
 *
 * Примеры:
 *   sieveOfEratosthenes(10) → {2, 3, 5, 7}
 *   sieveOfEratosthenes(20) → {2, 3, 5, 7, 11, 13, 17, 19}
 *
 * 💡 ПОДСКАЗКИ:
 * - vector<bool> isPrime(n + 1, true);
 * - isPrime[0] = isPrime[1] = false;
 * - Для i от 2 до √n: если isPrime[i], отметьте кратные
 */
vector<int> sieveOfEratosthenes(int n) {
    // TODO: Напишите код здесь
    return {};
}

// Тесты для задачи 2
void testSieveOfEratosthenes() {
    cout << "\n🧪 Тесты для sieveOfEratosthenes():\n";

    vector<pair<int, vector<int>>> tests = {
        {10, {2, 3, 5, 7}},
        {20, {2, 3, 5, 7, 11, 13, 17, 19}},
        {1, {}},
        {2, {2}}
    };

    for (const auto& [n, expected] : tests) {
        vector<int> result = sieveOfEratosthenes(n);
        string status = (result == expected) ? "✅" : "❌";
        cout << status << " sieveOfEratosthenes(" << n << ") = {";
        for (size_t i = 0; i < result.size(); i++) {
            cout << result[i];
            if (i < result.size() - 1) cout << ", ";
        }
        cout << "}\n";
    }
}

// ============================================
// ЗАДАЧА 3: СОРТИРОВКА ПУЗЫРЬКОМ
// ============================================

/**
 * Отсортировать вектор методом пузырьковой сортировки
 *
 * Примеры:
 *   bubbleSort({5, 2, 8, 1, 9}) → {1, 2, 5, 8, 9}
 *   bubbleSort({3, 3, 1}) → {1, 3, 3}
 *
 * 💡 ПОДСКАЗКИ:
 * - Копируйте вектор: vector<int> arr = numbers;
 * - Два вложенных цикла
 * - Обмен: swap(arr[j], arr[j+1]);
 */
vector<int> bubbleSort(vector<int> numbers) {
    // TODO: Напишите код здесь
    return {};
}

// Тесты для задачи 3
void testBubbleSort() {
    cout << "\n🧪 Тесты для bubbleSort():\n";

    vector<pair<vector<int>, vector<int>>> tests = {
        {{5, 2, 8, 1, 9}, {1, 2, 5, 8, 9}},
        {{1}, {1}},
        {{3, 3, 1}, {1, 3, 3}},
        {{}, {}}
    };

    for (const auto& [numbers, expected] : tests) {
        vector<int> result = bubbleSort(numbers);
        string status = (result == expected) ? "✅" : "❌";
        cout << status << " bubbleSort({";
        for (size_t i = 0; i < numbers.size(); i++) {
            cout << numbers[i];
            if (i < numbers.size() - 1) cout << ", ";
        }
        cout << "}) = {";
        for (size_t i = 0; i < result.size(); i++) {
            cout << result[i];
            if (i < result.size() - 1) cout << ", ";
        }
        cout << "}\n";
    }
}

// ============================================
// ЗАДАЧА 4: ВАЛИДАЦИЯ СКОБОК
// ============================================

/**
 * Проверить, сбалансированы ли скобки
 *
 * Примеры:
 *   isBalanced("()") → true
 *   isBalanced("([)]") → false
 *   isBalanced("{[]}") → true
 *
 * 💡 ПОДСКАЗКИ:
 * - Используйте стек: vector<char> stack;
 * - Для открывающей: stack.push_back(c);
 * - Для закрывающей: stack.pop_back() и проверить
 * - map<char, char> pairs = {{'(', ')'}, {'[', ']'}, {'{', '}'}};
 */
bool isBalanced(const string& text) {
    // TODO: Напишите код здесь
    return false;
}

// Тесты для задачи 4
void testIsBalanced() {
    cout << "\n🧪 Тесты для isBalanced():\n";

    vector<pair<string, bool>> tests = {
        {"()", true},
        {"()[]  {}", true},
        {"(]", false},
        {"([)]", false},
        {"{[]}", true},
        {"", true}
    };

    for (const auto& [text, expected] : tests) {
        bool result = isBalanced(text);
        string status = (result == expected) ? "✅" : "❌";
        cout << status << " isBalanced(\"" << text << "\") = " << (result ? "true" : "false") << "\n";
        if (result != expected) {
            cout << "   Ожидалось: " << (expected ? "true" : "false") << "\n";
        }
    }
}

// ============================================
// ЗАДАЧА 5: АНАГРАММЫ
// ============================================

/**
 * Проверить, являются ли два слова анаграммами
 *
 * Примеры:
 *   areAnagrams("listen", "silent") → true
 *   areAnagrams("hello", "world") → false
 *
 * 💡 ПОДСКАЗКИ:
 * - Привести к нижнему регистру: transform с ::tolower
 * - Удалить пробелы: erase с remove_if
 * - Сортировать: sort(word.begin(), word.end())
 * - Сравнить
 */
bool areAnagrams(string word1, string word2) {
    // TODO: Напишите код здесь
    return false;
}

// Тесты для задачи 5
void testAreAnagrams() {
    cout << "\n🧪 Тесты для areAnagrams():\n";

    vector<tuple<string, string, bool>> tests = {
        {"listen", "silent", true},
        {"hello", "world", false},
        {"Triangle", "Integral", true},
        {"a b c", "cba", true}
    };

    for (const auto& [word1, word2, expected] : tests) {
        bool result = areAnagrams(word1, word2);
        string status = (result == expected) ? "✅" : "❌";
        cout << status << " areAnagrams(\"" << word1 << "\", \"" << word2 << "\") = "
             << (result ? "true" : "false") << "\n";
        if (result != expected) {
            cout << "   Ожидалось: " << (expected ? "true" : "false") << "\n";
        }
    }
}

// ============================================
// БОНУСНАЯ ЗАДАЧА: FIBONACCI С МЕМОИЗАЦИЕЙ
// ============================================

map<int, long long> memo;

/**
 * Вычислить n-ое число Фибоначчи с мемоизацией
 *
 * Примеры:
 *   fibonacciMemo(10) → 55
 *   fibonacciMemo(20) → 6765
 *
 * 💡 ПОДСКАЗКИ:
 * - Используйте глобальный map<int, long long> memo;
 * - if (memo.count(n)) return memo[n];
 * - Вычислить, сохранить, вернуть
 */
long long fibonacciMemo(int n) {
    // TODO: Напишите код здесь
    return 0;
}

// Тесты для бонусной задачи
void testFibonacciMemo() {
    cout << "\n🧪 Тесты для fibonacciMemo() (БОНУС):\n";

    vector<pair<int, long long>> tests = {
        {0, 0},
        {1, 1},
        {10, 55},
        {20, 6765}
    };

    for (const auto& [n, expected] : tests) {
        long long result = fibonacciMemo(n);
        string status = (result == expected) ? "✅" : "❌";
        cout << status << " fibonacciMemo(" << n << ") = " << result << "\n";
        if (result != expected) {
            cout << "   Ожидалось: " << expected << "\n";
        }
    }
}

// ============================================
// ЗАПУСК ВСЕХ ТЕСТОВ
// ============================================

void runAllTests() {
    separator("🧪 ЗАПУСК ТЕСТОВ TDD LEVEL 2 (C++)");

    testCaesarCipher();
    testSieveOfEratosthenes();
    testBubbleSort();
    testIsBalanced();
    testAreAnagrams();
    testFibonacciMemo();

    separator("🏁 ВСЕ ТЕСТЫ ЗАВЕРШЕНЫ");

    cout << R"(
💡 СОВЕТЫ ДЛЯ C++:

1. **Полезные заголовочные файлы:**
   - #include <iostream>   // cout, cin
   - #include <string>     // string
   - #include <vector>     // vector
   - #include <map>        // map, unordered_map
   - #include <algorithm>  // sort, find, etc.
   - #include <cctype>     // isalpha, tolower, etc.

2. **STL Контейнеры:**
   - vector<T> — динамический массив
   - map<K, V> — сбалансированное дерево (сортированный)
   - unordered_map<K, V> — хэш-таблица (быстрее)
   - set<T> — уникальные элементы
   - stack<T>, queue<T> — стек, очередь

3. **STL Алгоритмы:**
   - sort(begin, end) — сортировка
   - find(begin, end, value) — поиск
   - reverse(begin, end) — реверс
   - max_element, min_element — мин/макс
   - count, count_if — подсчёт

4. **Полезные функции:**
   - s.size(), v.size() — размер
   - s.empty(), v.empty() — пустой?
   - s.push_back(x), v.push_back(x) — добавить
   - swap(a, b) — обменять
   - to_string(num) — число в строку
   - stoi(str), stof(str) — строка в число

5. **Range-based for (C++11):**
   for (const auto& item : container) {
       // используйте item
   }

🎯 СЛЕДУЮЩИЙ ШАГ:
- Попробуйте олимпиадные задачи (olympiad_problems.py)
- Решайте задачи на LeetCode в C++
- Изучайте STL подробнее
- Практикуйтесь с указателями и ссылками

🔥 ОТЛИЧНАЯ РАБОТА!
    )" << endl;
}

// ============================================
// MAIN FUNCTION
// ============================================

int main() {
    runAllTests();
    return 0;
}
