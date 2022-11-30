// module.exports = {
//   presets: [
//     '@vue/cli-plugin-babel/preset'
//   ],
//   // plugins: [
//   //   ["@vue/babel-plugin-jsx", {
//   //     enableObjectSlots: false,
//   //   }]
//   // ]
// }
module.exports = {
 presets: [
  [
  //  "@vue/app",
   '@vue/cli-plugin-babel/preset',
   {
    "useBuiltIns": "entry",
    polyfills: [
     'es6.promise',
     'es6.symbol'
    ]
   }
  ]
 ],
};