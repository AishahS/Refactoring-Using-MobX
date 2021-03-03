import products from "../products";
import { observable, makeObservable } from "mobx";
import { configure } from "mobx";

configure({
  useProxies: "never",
});

class productStore {
  products = products;
  constructor() {
    makeObservable(this, { products: observable });
  }

  addProduct = (product) => {
    const _product = {
      ...product,
      id: this.products.length + 1,
      slug: `ygfgfdzbsrdgdffzd${this.products.length + 1}`,
    };
    this.products = [...this.products, _product];
  };

  deleteProduct = (productSlug) => {
    const updatedProducts = this.products.filter(
      (product) => product.slug !== productSlug
    );
    this.products = updatedProducts;
  };
}

const myproductStore = new productStore();

export default myproductStore;
