const snakeCase = 'hello_world';

const converSnakeCaseToCamelCase = snakeCaseString => snakeCaseString.replace(/_\w/g, (matches) => matches[1].toUpperCase());
console.log(converSnakeCaseToCamelCase(snakeCase));
