'use strict';

const iterate = (collection, handler) => {
  const propertyNames = Object.keys(collection);
  for (const property of propertyNames) {
    const propertyValue = collection[property];
    handler(property, propertyValue, collection);
  }
};

module.exports = { iterate };
