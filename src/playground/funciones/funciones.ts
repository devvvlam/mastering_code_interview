function sumTwoNumbers(a: number, b: number) {
  return a + b;
}

console.log(sumTwoNumbers(10, 23));

type Sizes = 'S' | 'M' | 'L' | 'XL';

function createProductToJson(
  title: string,
  createAt: Date,
  stock: number,
  size: Sizes,
) {
  return {
    title,
    createAt,
    stock,
    size,
  }
}

function createProductToJsonV2(
  title: string,
  createAt: Date,
  stock: number,
  size?: Sizes,
) {
  return {
    title,
    createAt,
    stock,
    size,
  }
}

const producto1: Object = createProductToJson('P1', new Date(), 12, 'XL');
console.log(producto1);
const producto2: Object = createProductToJsonV2('P2', new Date(), 14);
console.log(producto2);
