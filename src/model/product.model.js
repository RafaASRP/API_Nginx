const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize("product_test", "alfa", "gama", {
    host: "35.172.194.126",
    dialect: "mysql",
});

class Product extends Model {}

Product.init({
    Product_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false,
    },
    is_stock: {
        type: DataTypes.BOOLEAN,
    }
}, {
    sequelize,
    modelName: "Product"
});

module.exports = Product;

//async function testConection(){
//    try {
//        await sequelize.authenticate();
//        console.log("All Good!! ");
//    }catch (err) {
//        console.error("All Bad!!", err);
//    }
//}

//testConection();