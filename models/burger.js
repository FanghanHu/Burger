const orm = require('../config/orm');

class Burger {
    /**
     * @param {number} id
     * @param {string} burger_name
     * @param {boolean} devoured
     */
    constructor(id, burger_name, devoured) {
        this.id = id;
        this.burger_name = burger_name;
        this.devoured = devoured;
    }
    static selectAll() {
        return orm.selectAll("burgers");
    }
    static insertOne(burger) {
        return orm.insertOne('burgers', burger);
    }
    static devour(id) {
        return orm.updateOne('burgers', id, 'devoured', true);
    }

    insert() {
        return Burger.insertOne(this);
    }
}

module.exports = Burger;