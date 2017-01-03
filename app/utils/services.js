module.exports = {
    filterProducts (products, selectedCategory) {
        return products.filter ( p => {
            return parseInt(p.categoryID) === ( selectedCategory ||
                (products && Object.keys(products).length !== 0 ? products[0]['categoryID'] : 0))
        });
    },

    he(str) {
        return str ? String(str)
                .replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;') : "";
    }
};