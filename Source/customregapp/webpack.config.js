module.exports = {
  module: {
    exprContextCritical: false,
    ignoreWarnings: [
    {
      module: /node_modules\/react-datepicker\/dist\/index\.es\.js/,
      message: /Critical dependency: the request of a dependency is an expression/,
    },
  ],


  },

};
