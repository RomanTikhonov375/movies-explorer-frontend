const serverErrorMessages = {
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

  const windowSize = {
    DESKTOP_WIDTH: 1649,
    TABLE_WIDTH: 1276,
    MOBILE_WIDTH: 766

  }

  const countMoviesToShow = {
    WIDEDESK_COUNT: 16,
    DESKTOP_COUNT: 12,
    TABLE_COUNT: 8,
    MOBILE_COUNT: 5
  }

  const indexToShow = {
    WIDEDESK_INDEX: 4,
    DESKTOP_INDEX: 3,
    TABLET_INDEX: 2,
    MOBILE_INDEX: 2,
  }

  const BASE_URL = 'https://api.nomoreparties.co';

  const SHORT_FILM_DURATION = 40

  export {
    serverErrorMessages,
    windowSize,
    countMoviesToShow,
    indexToShow,
    BASE_URL,
    SHORT_FILM_DURATION
  }