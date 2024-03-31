import type { HttpContext } from '@adonisjs/core/http'


export default class HomeController {

    async  index({route,request,session,view,inspect}:HttpContext) {

       
        return view.render('pages/home',{
            name:'doe',
            age:12,
            sexe:'f'
        });
    }
}