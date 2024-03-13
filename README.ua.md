[EN](https://github.com/KorolikD/project-Qwerty2024-front/blob/main/README.md)

# PowerPulse <img align="center" width="32" height="32" src="https://raw.githubusercontent.com/KorolikD/project-Qwerty2024-front/main/public/favicon.ico">

Представляємо PowerPulse — ваш особистий додаток для фітнесу, розроблений, щоб *допомогти вам контролювати форму свого тіла* та *досягти бажаного рівня активності*.

Цей API надає ендпоінти як для публічної, так і для приватної взаємодії, дозволяючи користувачам безпечно отримувати доступ до різноманітних функцій програми для фітнесу.

**Тож давайте подбаємо про ваше здоров’я разом у нашому додатку** ❤️

## 🔧 Основний функціонал:

1. Публічні ендпоінти:
- Аутентифікація та авторизація з валідацією даних та секюрністю.
- Ендпоінт статистики, який надає інформацію про:
  - Кількість тренувальних відео доступних у додатку.
  - Загальну кількість калорій, спалених всіма зареєстрованими користувачами.
  - Загальну кількість зареєстрованих користувачів у додатку.
  - Загальну кількість годин, проведених зареєстрованими користувачами на тренуваннях.
  - Загальну кількість тренувань, завершених зареєстрованими користувачами.
2. Приватні Ендпоінти:
- ендпоінт виходу з системи.
- Оновлення даних користувача, включаючи зміну аватара.
- На основі особистих характеристик користувача, таких як зріст, поточна вага, бажана вага, дата народження, група крові, стать та рівень активності за день, розраховується щоденна кількість калорій та час, призначений для щоденних занять спортом.
- Отримання інформації про дані користувача.
- Отримання всіх доступних продуктів у базі даних, з можливістю фільтрації за категоріями та/або рекомендацією продуктів відповідно до групи крові користувача.
- Отримання всіх доступних тренувань у базі даних, з можливістю фільтрації за частинами тіла, м'язами та обладнанням.
- Збереження спожитих продуктів та виконаних вправ за день.
- Видалення спожитих продуктів та виконаних вправ за день.
- Отримання інформації про спожиті продукти та виконані вправи за датою.

## Детальна документація

[![Swagger](https://img.shields.io/badge/-Swagger-85EA2D?logo=Swagger&logoColor=white)](https://project-qwerty2024-back.onrender.com/api-docs/#/)

## 👨‍💻 Команда розробників:

[![Dmytro Korolik](https://img.shields.io/badge/git_hub-262625?style=for-the-badge&logo=github&logoColor=white)](https://github.com/KorolikD) **Дмитро Королік** - *Project Team Lead, FullStack Developer*

[![Ilia Semenova](https://img.shields.io/badge/git_hub-262625?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ILIANASEMENOVA) **Іля Семенова** - *FullStack Developer*

[![Anna Yavorska](https://img.shields.io/badge/git_hub-262625?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Anna-Yavorska) **Анна Яворська** - *FullStack Developer*

[![Igor Liakh](https://img.shields.io/badge/git_hub-262625?style=for-the-badge&logo=github&logoColor=white)](https://github.com/igorlyakh) **Ігор Лях** - *FrontEnd TeamLead, Frontend Developer*

[![Andrii Rod](https://img.shields.io/badge/git_hub-262625?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AndriiRod) **Андрій Родь** - *FrontEnd TeamLead, Frontend Developer*

[![Anastasiia Zastup](https://img.shields.io/badge/git_hub-262625?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AnastasiiaZastup) **Анастасія Заступ** - *Scrum Master, Frontend Developer*

[![Viktoriia Yakymovych](https://img.shields.io/badge/git_hub-262625?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ViktoriiaYakymovych) **Вікторія Якимович** - *Frontend Developer*

[![Sofiia Pashchenko](https://img.shields.io/badge/git_hub-262625?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Sofiia-28) **Софія Пащенко** - *Frontend Developer*

[![Daria Melnykova](https://img.shields.io/badge/git_hub-262625?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dmelnykova) **Дарья Мельникова** - *Frontend Developer*

[![Mariia Novosad](https://img.shields.io/badge/git_hub-262625?style=for-the-badge&logo=github&logoColor=white)](https://github.com/avemasha) **Марія Новосад** - *Frontend Developer*

[![Hlieb Maraiev](https://img.shields.io/badge/git_hub-262625?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Velms) **Глєб Мараєв** - *Frontend Developer*

## 🛠 Tech Stack:

**Backend side:**

[![NodeJs](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![Postman](https://img.shields.io/badge/-Postman-FF6C37?logo=postman&logoColor=white)](https://www.postman.com/)
[![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white)](https://docs.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/-Mongoose-47A248?logo=mongoose&logoColor=white)](https://mongoosejs.com/docs/)
[![Mongoose Paginate](https://img.shields.io/badge/-Mongoose_Paginate-47A248?logo=mongoose&logoColor=white)](https://www.npmjs.com/package/mongoose-paginate-v2)
[![Cloudinary](https://img.shields.io/badge/-Cloudinary-4285F4?logo=cloudinary&logoColor=white)](https://cloudinary.com/documentation)
[![bcrypt](https://img.shields.io/badge/-bcrypt-430089?logo=npm&logoColor=white)](https://www.npmjs.com/package/bcrypt)
[![cors](https://img.shields.io/badge/-cors-FF6C37?logo=npm&logoColor=white)](https://www.npmjs.com/package/cors)
[![dotenv](https://img.shields.io/badge/-dotenv-00C7B7?logo=npm&logoColor=white)](https://www.npmjs.com/package/dotenv)
[![joi](https://img.shields.io/badge/-joi-F7DF1E?logo=npm&logoColor=black)](https://github.com/sideway/joi)
[![jsonwebtoken](https://img.shields.io/badge/-jsonwebtoken-000000?logo=jsonwebtokens&logoColor=white)](https://www.npmjs.com/package/jsonwebtoken)
[![render](https://img.shields.io/badge/-render-008080?logo=npm&logoColor=white)](https://render.com/)

**Frontend side:**

[![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/-React-blue?logo=react&logoColor=white)](https://reactjs.org/)
[![react-router-dom](https://img.shields.io/badge/-react--router--dom-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Redux & Redux Toolkit](https://img.shields.io/badge/-Redux%20%26%20Redux%20Toolkit-764ABC?logo=redux&logoColor=white)](https://redux.js.org/)
[![redux-persist](https://img.shields.io/badge/-redux--persist-764ABC?logo=redux&logoColor=white)](https://github.com/rt2zz/redux-persist)
[![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML & CSS](https://img.shields.io/badge/-HTML%20%26%20CSS-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![axios](https://img.shields.io/badge/-axios-009688?logo=axios&logoColor=white)](https://axios-http.com/)
[![StyledComponents](https://img.shields.io/badge/-StyledComponents-DB7093?logo=styled-components&logoColor=white)](https://styled-components.com/)
[![Ant Design](https://img.shields.io/badge/-Ant_Design-0170FE?logo=ant-design&logoColor=white)](https://ant.design/)
[![Formik](https://img.shields.io/badge/-Formik-F49C20?logo=formik&logoColor=white)](https://formik.org/)
[![Slick Carousel](https://img.shields.io/badge/-Slick_Carousel-000000?logo=slick&logoColor=white)](https://www.npmjs.com/package/slick-carousel)

## 🔗 Frontend репозиторій 

[![PowerPulse API](https://img.shields.io/badge/powerpulse-262625?style=for-the-badge&logo=github&logoColor=white)](https://github.com/KorolikD/project-Qwerty2024-front)

## ⚙️ Налаштування

Щоб ініціалізувати проект, запустіть команду:

```bash
  npm install
```

Щоб розгорнути проект у режимі розробки, запустіть команду: 

```bash
  npm run dev
```

Щоб розгорнути проект у режимі продакшн, запустіть команду:

```bash
  npm start
```