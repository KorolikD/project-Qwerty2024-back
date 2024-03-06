// ? Auth
// * "/users/login";
// * "/users/register";
// * "/users/logout";
// * "/users/current";
// * "/users/params";
// * "/users/avatar"

// ? Products
// * "/products/categories
// * "/products

// ? Exercises
// * "/exercises"
// * "/exercises/params"

// ? Diary
// TODO post "/diary/product"
//* ProductDiaryRequest
//? перевірити чи не спрацьовує щоб дописати в доку "409": {
//   "description": "Provided email already exists",
//   "content": {}
// },
// * "required": ["email", "password"],

// TODO ProductDiaryResponse
// {
//     "ownerId": "65e70eaa9f1e9345d37c664e",
//     "date": "08/03/2024",
//     "products": [
//         {
//             "productId": "5d51694902b2373622ff5b8d",
//             "weight": 210,
//             "calories": 590,
//             "_id": "65e7b98992647a6eb0d47437"
//         }
//     ],
//     "totalCalories": 590,
//     "_id": "65e7b98992647a6eb0d47436"
// }

// ! delete "/diary/product"
//* /req
// {
//   "consumedProductId": "5d51694902b2373622ff5773",
//   "date": "07/03/2024"
// }

// TODO post "/diary/exercise"
//* ExerciseDiaryRequest

//* ExerciseDiaryResponse
// {
//     "ownerId": "65e70eaa9f1e9345d37c664e",
//     "date": "08/03/2024",
//     "exercises": [
//         {
//             "exerciseId": "64f2458d6f67bc34bae4f8cb",
//             "time": 3,
//             "burnedCalories": 306,
//             "_id": "65e7b92ce7f635b12e1a9235"
//         }
//     ],
//     "burnedCalories": 306,
//     "totalTime": 3,
//     "_id": "65e7b92ce7f635b12e1a9234"
// }

// ! delete "/diary/exercise"
//* /req
// {
//   "completedWorkoutId": "64f2458d6f67bc34bae4f8cb",
//   "date": "07/03/2024"
// }

// ! get "/diary"
// {
//     "foundExercises": {
//         "_id": "65e7b92ce7f635b12e1a9234",
//         "ownerId": "65e70eaa9f1e9345d37c664e",
//         "date": "08/03/2024",
//         "exercises": [
//             {
//                 "exerciseId": {
//                     "_id": "64f2458d6f67bc34bae4f8cb",
//                     "bodyPart": "back",
//                     "equipment": "cable",
//                     "name": "cable twisting pull",
//                     "target": "lats"
//                 },
//                 "time": 3,
//                 "burnedCalories": 306,
//                 "_id": "65e7b92ce7f635b12e1a9235"
//             }
//         ],
//         "burnedCalories": 306,
//         "totalTime": 3
//     },
//     "foundProducts": {
//         "_id": "65e7b98992647a6eb0d47436",
//         "ownerId": "65e70eaa9f1e9345d37c664e",
//         "date": "08/03/2024",
//         "products": [
//             {
//                 "productId": {
//                     "groupBloodNotAllowed": {
//                         "1": false,
//                         "2": false,
//                         "3": false,
//                         "4": false
//                     },
//                     "_id": "5d51694902b2373622ff5b8d",
//                     "category": "fish",
//                     "title": "Pollock in batter"
//                 },
//                 "weight": 210,
//                 "calories": 590,
//                 "_id": "65e7b98992647a6eb0d47437"
//             }
//         ],
//         "totalCalories": 590
//     }
// }

// ? Statistics
// * /statistics

// Burned calories quantity
// Number of burned calories

// перевірити де потрібно "required": true,
