## Часть 1 Module Federation vs Single SPA

В данной задаче весь код написан на JS поэтому нету необходимости использования Single SPA.

## Часть 2
```
/microfrontends
  ├── host
  │   ├── src
  │   ├── public
  │   └── webpack.config.js
  ├── grid
  │   ├── src
  │   ├── public
  │   └── webpack.config.js
  ├── profile
  │   ├── src
  │   ├── public
  │   └── webpack.config.js
  ├── auth
  │   ├── src
  │   ├── public
  │   └── webpack.config.js
  ├── image-controller
  │   ├── src
  │   ├── public
  │   └── webpack.config.js
  ├── image-view
      ├── src
      ├── public
      └── webpack.config.js

```

В этом контексте host - содержит в себе входную точку в которой рисуется `header`, `grid` и `footer`, `image-controller`, `profile`

`grid` управляет тем как будет выглядеть отображение сетки (фильтрации, сортировки, рекомендации и т.д.)

`image-view` управляет тем как будет отображаться карточка объекта и что будет происходить при нажатии. Отображение реакций и дополнительных кнопок находится здесь при этом это не ключевой функционал и может быть скрыт загулшкой, если бэкенд лайков не работет (фильтры). Наличие отдельного бэкенда лайков при этом вполне может быть обоснованно.

`image-controller` управляет формами создания изображения и удаления изображения

Сама frontback функциональность авторизации это middlewhere и не требует никаких микрофронтендов

`auth` управляет экраном авторизации и регистрации. frontback функциональсть авторизации (JWT) работает как middleware util

`profile` управляет экраном редактирования профиля


### Задача 2
[тык сюда на яндекс диск](https://disk.yandex.ru/d/OKa4jDQYChNZJw)
