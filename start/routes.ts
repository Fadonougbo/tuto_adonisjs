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

router.on('/').render('pages/home')

//const HomeController=()=>import('#controllers/home_controller')

router.get('/home','#controllers/home_controller.index').as('home');



router.group(()=> {

    router.get('/home',({route})=> {
        return {
            current:route?.name,
            goTo:router.builder().prefixUrl('http://localhost:3333').make('blog.about')
            
        }
    }).as('home2')

    router.get('about',({route})=> {
        return {
            current:route?.name,
            goTo:router.builder().prefixUrl('http://localhost:3333').make('blog.home2')
        }
            
    }).as('about')

}).prefix('/blog').as('blog')