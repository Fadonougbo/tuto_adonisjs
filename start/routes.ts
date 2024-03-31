/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

//import HomeController from '#controllers/home_controller';
import router from '@adonisjs/core/services/router'

/* router.on('/').render('pages/home') */



//const HomeController=()=>import('#controllers/home_controller')

router.get('/home','#controllers/home_controller.index').as('home');




router.group(()=> {

    router.get('about/:id',({route,params})=> {

        return {
            current:route?.name,
            debug:params
           
        }
            
    }).where('id',/^[0-9]+$/).as('about')

}).prefix('/blog').as('blog')