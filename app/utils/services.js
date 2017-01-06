module.exports = {
    filterProducts (products, selectedCategory, searchField) {
        let arr = products.filter ( p => {
            return parseInt(p.categoryID) === ( selectedCategory ||
                (products && Object.keys(products).length !== 0 ? products[0]['categoryID'] : 0))
        });

        return arr.filter(f => {
            return f.name.toLowerCase().search(searchField && searchField.toLowerCase()) !== -1;
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