const getAsSnakeCase = (string) => (
    string.split(/(?=[A-Z])/).join('-').toLowerCase()
);

export default getAsSnakeCase;