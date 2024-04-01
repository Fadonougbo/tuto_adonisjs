/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/


import router from '@adonisjs/core/services/router'


router.group(()=> {

    router.get('/:article/:id',({route})=> {

        return {
            page:route?.name,
            path:route?.pattern,
            home:router.makeUrl('gov.home',{},{prefixUrl:"http://localhost:3333"})
        }

    }).as('show')

    router.get('/',({request,route})=> {
    
        return {
            page:route?.name,
            all:request.all(),
            path:route?.pattern,
            show:router.makeUrl('gov.show',{article:'article',id:2},{prefixUrl:"http://localhost:3333"})
        }
    }).as('home')

}).prefix('/gov').as('gov')