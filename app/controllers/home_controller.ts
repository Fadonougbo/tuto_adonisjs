import type { HttpContext } from "@adonisjs/core/http";
import vine, { errors } from "@vinejs/vine";
import type { Infer } from "@vinejs/vine/types";
import { rule } from "#validators/home";

export default class HomeController {
	async index({ view }: HttpContext) {

        
		const schema = vine.object({
			name: vine.string().minLength(4),
			age: vine.number().positive(),
		});

       const authorSchema=vine.object({
        id:vine.number(),
        ...schema.getProperties()
       })
		const data = {
			name: "dopoe",
			age: 19,
		};

        type DataType = Infer<typeof authorSchema>;

        const authorData:DataType={
            name:"hor",
            age:12,
            id:5
        }

		

		try {
			const validator = vine.compile(authorSchema);
			const response = await validator.validate(authorData);
            
		} catch (error) {
			if (error instanceof errors.E_VALIDATION_ERROR) {
				return error;
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
