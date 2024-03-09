const SERVER_ERROR_MESSAGE = {
    USER_REGISTER_ERROR: 'При регистрации пользователя произошла ошибка.',
    USER_EDIT_ERROR: 'При обновлении профиля произошла ошибка.',
    SERVER_ERROR: '500 На сервере произошла ошибка.',
    NOT_FOUND_ERROR: '404 Страница по указанному маршруту не найдена.',
    DEFAULT_ERROR: 'Что-то пошло не так...',
    AUTH_ERROR: 'Вы ввели неправильный логин или пароль.',
    AUTH_TOKEN_FORMAT_ERROR: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.',
    AUTH_TOKEN_ERROR: 'При авторизации произошла ошибка. Переданный токен некорректен.',
    EMAIL_ALREADY_EXISTS_ERROR: 'Пользователь с таким email уже существует.',


  };

  const WINDOW_SIZE = {
    DESKTOP: 1649,
    TABLE: 1276,
    MOBILE: 766

  }

  const COUNT_MOVIES_TO_SHOW = {
    WIDEDESK: 16,
    DESKTOP: 12,
    TABLE: 8,
    MOBILE: 5
  }

  const INDEX_TO_SHOW = {
    WIDEDESK: 4,
    DESKTOP: 3,
    TABLET: 2,
    MOBILE: 2,
  }

  const BASE_URL = 'https://api.nomoreparties.co';

  const SHORT_FILM_DURATION = 40

  export {
    SERVER_ERROR_MESSAGE,
    WINDOW_SIZE,
    COUNT_MOVIES_TO_SHOW,
    INDEX_TO_SHOW,
    BASE_URL,
    SHORT_FILM_DURATION
  }