import type { HttpContext } from '@adonisjs/core/http'


export default class HomeController {

    async  index({route,request}:HttpContext) {

        
        return {
            current:route?.name
        }

    }
}