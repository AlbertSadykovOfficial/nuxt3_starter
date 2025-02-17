# Тестирование

## Unit (Модульное)
Модульные тесты пишутся для проверки того, что небольшие изолированные фрагменты кода работают должным образом.

Модульный тест обычно охватывает одну функцию, класс, компонуемый объект или модуль.

Модульные тесты сосредоточены на логической корректности и затрагивают лишь небольшую часть общей функциональности приложения.

Они могут имитировать большую часть среды вашего приложения (например, начальное состояние, сложные классы, сторонние
модули и сетевые запросы).

Библиотеки:
- Vitest
- Jest

## Components (Компонентное)
Если тестируем работу одного компонента (если у него есть вложенность, то используем специальные
shallow компоненты, которые подставляют заглушки на все вложенные в него компоненты)

(Это специфичное тестирование для фреймворков (Vue, React), находящееся между Unit и Integration)

Библиотеки:
- Vitest (для проверки без состояния)
- @vue/test-utils (Для Компонентов и DOM)
- Jest

## Integration (Интеграционное)
Если тестируем работу не менее 2х компонентов, то этот тест интеграционный.
Или взаимодействие Unit'ов.

Подходит для проверки визуальной логики: правильность вывода рендера на основе введенных параметров и слотов.
(А так же: проверка компонента списка или  проверка layout, включающего несколько вложенных компонентов)

Не нужно тестировать внутренности компонента и его методы, нужно тестировать то, что он выводит.
Конечная задача компонента - вывод корректных выходных данных DOM, поэтому тесты, ориентированные на выходные данные DOM,
обеспечивают тот же уровень уверенности в корректности (если не больше), но при этом являются более надежными и
устойчивыми к изменениям. 

Если отдельный метод нуждается в тщательном тестировании, следует рассмотреть его перенос в отдельную служебную функцию и
написать для него отдельный Unit (модульный) тест.

Библиотеки:
- Vitest (для проверки без состояния)
- @vue/test-utils (Для Компонентов и DOM)
- Cypress Component Testing (для компонентов, ожидаемое поведение которых зависит от правильного отображения стилей или событий DOM. Его можно использовать с библиотекой тестирования через @testing-library/cypress.)
- Nightwatch
- WebdriverIO

## End-to-end (Полное | Комплексное)

Модульные и Интеграционные тесты ограничены в своих возможностях и поэтому дают не полную уверенность в работоспособности
приложения для клиента.

E2E тестирование позволяет более полноценно проверить процесс работы приложения имитируя взаимодействие пользователя

E2E сосредоточены на поведении многостраничного приложения, когда отправляются сетевые запросы.
Они часто включают в себя работу с БД или другого взаимодействия с серверной частью.

E2E сособны выявить такие проблемы как: проблема с маршрутизатором, библиотекой управления состоянием, компонентами
верхнего уровня (например, приложением или макетом), общедоступными ресурсами или любой обработкой запросов.
Как указывалось выше, они выявляют критические проблемы, которые может быть невозможно выявить с помощью модульных тестов
или тестов интеграционных.

E2E не импортируют какой-либо код приложения, а вместо этого полностью тестируют приложение, просматривая целые страницы
в реальном браузере.

Чем больше E2E тесты имитируют использование приложения пользователями, тем больше шанс удостовериться в правильности
логики работы или ее проблемах.

Библиотеки:
- Playwright
- Cypress
- Nightwatch
- WebdriverIO