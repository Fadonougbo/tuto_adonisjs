import vine from '@vinejs/vine'

export const rule=vine.compile(
    vine.object({
        name:vine.string().minLength(4),
        age:vine.number().positive()
    })
)
