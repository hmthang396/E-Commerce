'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Collection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Brand, {
        foreignKey: {
          name: "brandId",
        },
      });
      this.hasMany(models.Product, {
        foreignKey: {
          name: "collectionId",
        },
      });
    }
  }
  Collection.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Collection',
  });
  return Collection;
};