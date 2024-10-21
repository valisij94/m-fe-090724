## Практическое занятие №5

### Тема: CSS Adaptive. Media queries.

Репозитарий содержит материалы по практическому занятию №5, посвященному работе с CSS Adaptive.

### Цели занятия
- закрепление знаний, полученных на лекциях;
- практическое применение знаний, полученных на лекциях.

### Задачи занятия
В процессе занятия, предполагается разобрать работу CSS Grid на наглядном макете (цветные квадраты, которые будут позиционироваться).

**Закрепим практикой**
1. Сделайте так, чтобы на экранах до 520 пикселей шириной, не отображался бы `.box5`.
2. Сделайте так, чтобы на экранах свыше 700 пикселей шириной, кубик `.box7` красился бы в красный цвет.
3. На малых экранах (до 375 пикселей), увеличивайте размер шрифта для всего внутри контейнера `.experimentalGrid` до 20 пикселей.
4. Задача со звездочкой. Сделайте так, чтобы на экранах от 375 пикселей до 520 пикселей шириной, наша сетка отображалась бы в виде сетки в 4 столбца, а во всех остальных случаях - в один столбец.
5. Для контейнера `experimentalGrid`, сделайте так, чтобы на экранах шириной до 520 пикселей, он бы отображался как сетка из 2 столбцов. Все, что больше - сетка из 4 столбцов.
6. Теперь сделайте так, чтобы на экранах шире 900 пикселей наша сетка отображалась бы в виде сетки из 6 столбцов.
7. Используя подход `mobile-first`, сделайте так, чтобы контейнер `.experimentalGrid` отображался бы как сетка таким образом:
 - на смартфонах (до 375 пикселей) - в 1 столбец
 - на больших смартфонах (376-520 пикселей) - 2 столбца
 - на планшетах (521-700 пикселей) - в 4 столбца
 - на всем остальном - в 8 столбцов.
8. Теперь решите аналогичную задачу с помощью `desktop-first` подхода.


### Полезные ссылки
 - (Русскоязычный гайд)[https://itchief.ru/html-and-css/media-queries] по адаптивной верстке.