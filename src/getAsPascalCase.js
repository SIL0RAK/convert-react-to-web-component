/**
 * converts string to pascal case
 * @param {string} string 
 */
const getAsPascalCase = (string) => (
    string.split('-').map((str, index) => (
        (index !== 0)
            ? `${str.charAt(0).toUpperCase()}${str.substring(1)}`
            : str
    )).join('')
);

export default getAsPascalCase;