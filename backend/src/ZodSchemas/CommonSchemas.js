import zod from "zod"

const dateSchema = zod.preprocess(
  (dateString) => new Date(dateString),
  zod.date()
);

export const LoginSchema = zod.object({
    id: zod.string(), 
    dateOfBirth: dateSchema
})