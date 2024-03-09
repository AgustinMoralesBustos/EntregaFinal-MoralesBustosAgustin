import productosJson from '../productos.json';

export default function asyncMock(categoryId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (categoryId === undefined) {
                resolve(productosJson);
            } else {
                const productosFiltrados = productosJson.filter(item => item.categoria === categoryId);
                resolve(productosFiltrados);
            }
        }, 2000);
    });
}
