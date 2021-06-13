const getAsSnakeCase = (text: string) => (
    text.split(/(?=[A-Z])/).join('-').toLowerCase()
);

export default getAsSnakeCase;