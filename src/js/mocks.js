import { Product } from "./classes";

export const products = [
  new Product(
    1,
    "Lemon pie",
    8,
    "https://res.cloudinary.com/ddcg1jktl/image/upload/v1666311834/IMG_9074_ksl33p.jpg",
    "cakes"
  ),
  new Product(
    2,
    "Apple crumble",
    8,
    "https://res.cloudinary.com/ddcg1jktl/image/upload/v1666311834/IMG_8242_hepyzq.jpg",
    "cakes"
  ),
  new Product(
    3,
    "Cookie Chips",
    1.5,
    "https://res.cloudinary.com/ddcg1jktl/image/upload/v1666311838/IMG_8761_iwgnrl.jpg",
    "cookies"
  ),
  new Product(
    4,
    "Cupcakes",
    3,
    "https://res.cloudinary.com/ddcg1jktl/image/upload/v1666313299/IMG_5783_em5xbw.jpg",
    "cupcakes"
  ),
];

export const getProducts = (categoryName) => {
  return new Promise((res, rej) => {
    const filteredProducts = products.filter(
      (prod) => prod.category === categoryName
    );
    const ref = categoryName ? filteredProducts : products;
    setTimeout(() => {
      res(ref);
    }, 2000);
  });
};
