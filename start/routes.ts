/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.get('/home/:age/:name?/*',({params})=> {
    console.log(params['*'])
    return `okok ${params.age} ${params.name}`;
})
