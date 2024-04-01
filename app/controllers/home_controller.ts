import type { HttpContext } from "@adonisjs/core/http";
import vine, { errors, SimpleMessagesProvider } from "@vinejs/vine";
import type { Infer } from "@vinejs/vine/types";

export default class HomeController {
	async index({ view,request,session,logger }: HttpContext) {

       
		vine.convertEmptyStringsToNull = true

		
		vine.messagesProvider=new SimpleMessagesProvider({
			string:"essai {{field}}  "
		})

		

		const schema = vine.object({
			name: vine.string().trim().nullable(),
			age: vine.number().positive(),
		});

       const authorSchema=vine.object({
        id:vine.number(),
		terms:vine.accepted(),
		sport:vine.enum(['foot','natation','velo']).optional(),
        ...schema.getProperties()
       })
		const data = {
			name: "dopoe",
			age: 19,
		};

        type DataType = Infer<typeof authorSchema>;

        const authorData:DataType={
            name:2,
            age:12,
            id:5,
			terms:'1',
			sport:"footw"
        }


		

		try {
			const validator = vine.compile(authorSchema);
			
			const response=await validator.validate(authorData);

			
            
		} catch (error) {

			if (error instanceof errors.E_VALIDATION_ERROR) {
				return session.all();
			}
		}

		/* const response=await rule.validate({});

        console.log(response) */

		return view.render("pages/home", {
			name: "doe",
			age: 12,
			sexe: "f",
		});
	}
}
