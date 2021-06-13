const getAsPascalCase = (text: string) => (
    text.split('-').map((str, index) => (
        (index !== 0)
            ? `${str.charAt(0).toUpperCase()}${str.substring(1)}`
            : str
    )).join('')
);

export default getAsPascalCase;