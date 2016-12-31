module.exports = {
    filterProducts: function (products, selectedCategory) {
        let arr = products.filter ( p => {
            return parseInt(p.categoryID) === ( selectedCategory ||
                (products && Object.keys(products).length !== 0 ? products[0]['categoryID'] : 0))
        });

        return arr;
    }
};