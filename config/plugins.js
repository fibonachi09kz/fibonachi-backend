module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: 'dzj4qjo1h',
                api_key: '137871328177943',
                api_secret: 'RrZCnyLYrUBcDs9bpgBRPkh-xio',
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
});