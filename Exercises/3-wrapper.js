'use strict';

onst contract = (fn, ...typeDefs) => (...parameters) => {
  for (let i = 0; i < parameters.length; i++) {
    const currentParam = parameters[i];
    const expectedType = typeDefs[i];
    const typeName = expectedType.name.toLowerCase();
    if (typeof currentParam !== typeName) {
      throw new TypeError(`Argument type ${typeName} expected`);
    }
  }
  const result = fn(...parameters);
  const resultTypeDef = typeDefs[typeDefs.length - 1];
  const resultTypeName = resultTypeDef.name.toLowerCase();
  if (typeof result !== resultTypeName) {
    throw new TypeError(`Result type ${resultTypeName} expected`);
  }
  return result;
};

module.exports = { contract };
