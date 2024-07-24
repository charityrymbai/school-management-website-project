import zod from 'zod';

const dateSchema = zod.preprocess(
    (dateString) => new Date(dateString),
    zod.date()
);

export const LoginSchema = zod.object({
    id: zod.string(),
    dateOfBirth: dateSchema,
});

export const SiginSchema = zod.object({
    id: zod.number(),
    date_of_birth: zod.string(),
});
