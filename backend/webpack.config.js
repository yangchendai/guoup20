const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/index.ts", 
  target: "node",         
  externals: [nodeExternals()], 
  output: {
    filename: "bundle.js", 
    path: path.resolve(__dirname, "dist"), 
    clean: true           
  },
  resolve: {
    extensions: [".ts", ".js"], 
  },
  module: {
    rules: [
      {
        test: /\.ts$/,        
        use: "ts-loader",       
        exclude: /node_modules/
      }
    ]
  },
  devtool: "source-map",       
};
