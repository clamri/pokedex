const path = require('path');

const rootPath = path.resolve(__dirname, '../');

module.exports = {
    stories: ['../components/**/*.stories.js'],
    addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-essentials'],
    webpackFinal: async (config, { configType }) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '~': rootPath,
            '~~': rootPath,
            '@': rootPath,
            // -- when using stylus, this is necessary in order to help storybook resolve any stylus files that your component might import
            assets: `${rootPath}/assets`,
            static: `${rootPath}/static`
        };


        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        // Make whatever fine-grained changes you need
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                'style-loader',
                'vue-style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    }
                },
                {
                    loader: 'style-resources-loader',
                    options: {
                        patterns: [
                            path.resolve(__dirname, '../assets/css/_var.scss'),
                            path.resolve(__dirname, '../assets/css/_colors.scss'),
                            path.resolve(__dirname, '../assets/css/reset.scss'),
                            path.resolve(__dirname, '../assets/css/main.scss'),
                        ],
                    },
                },
            ],
            include: rootPath,
        });

        // Return the altered config
        return config;
    },
};