Приложение wikiSearch


1. Реализовать компонент search c с базовой функциональностью
2. Создать компонент wikiSearch наследником от search и испоьлзовать в нем wikiSearchService
3. в wikiSearchService - получение данных по запросу к API (https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=apple)
4. Читаем событие изменений в input с помощью RxJS
5. Лимитировать количество отправляемых на сервер запросов


Bonus:
Создать свой Rxjs:

1. Рализовать observable объект на который можно подписываться
2. фабрику (Observer.create) для создания нового объекта observable
3. Реализовть subject объект, на который можно подписываться и который может может переводовать новые элмеметы в последовательность