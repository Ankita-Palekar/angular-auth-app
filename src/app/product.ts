export class Product {
  Id: number;
  Slug: string;
  Description: string;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
