const serverErrorMessages = {
    userOnRegisterError: 'При регистрации пользователя произошла ошибка.',
    userOnEditError: 'При обновлении профиля произошла ошибка.',
    serverError: '500 На сервере произошла ошибка.',
    notFoundError: '404 Страница по указанному маршруту не найдена.',
    defaultError: 'Что-то пошло не так...',
    authError: 'Вы ввели неправильный логин или пароль.',
    authTokenFormatError: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.',
    authTokenError: 'При авторизации произошла ошибка. Переданный токен некорректен.',
    emailAlredyExistError: 'Пользователь с таким email уже существует.',


  };

  const windowSize = {
    desktopWidth: 1280,
    tabletWidth: 768,
    mobileWidth: 550

  }

  const countMoviesToShow = {
    wideDeskCount: 16,
    desktopCount: 12,
    tabletCount: 8,
    mobileCount: 5
  }

  const indexToShow = {
    wideDeskIndex: 4,
    desktopIndex: 3,
    tabletIndex: 2,
    mobileIndex: 2,
  }

  const baseUrl = 'https://api.nomoreparties.co';

  export {
    serverErrorMessages,
    windowSize,
    countMoviesToShow,
    indexToShow,
    baseUrl
  }