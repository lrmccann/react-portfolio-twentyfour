module.exports = {
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react', {runtime: 'automatic'}],
    ],
    // module: {
    //     rules: [
    //         {
    //             test: /\.svg$/,
    //             use: ['@svgr/webpack'],
    //         }
    //     ]
    // }
    // "plugins": ["inline-react-svg"]
}