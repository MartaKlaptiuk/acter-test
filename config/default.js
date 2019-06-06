module.exports = {
    reactor: {
        // secrets: {
        //     auth: 'MySuperSecret!!!!'
        // },
        server: {
            persistence: 'mysql://root:pass@localhost/project-clear',
            port: 8000,
            statics: {
                active: true,
                endpoint: '',
                folder: 'statics' // The root of your source file + /statics
            },
        },
        services: {
            defaults: {
                model: {
                    freezeTableName: true
                },
                pagination: {
                    default: 20,
                    max: 1000
                }
            },
            definitions: {
                // 'call': {
                //     auto: false
                // },
                // 'users': {
                //     model: 'user',
                //     auto: true
                // },
                // 'locations': {
                //     model: 'location',
                //     auto: true
                // },
                // 'patients': {
                //     model: 'patient',
                //     auto: true
                // },
                // 'providers': {
                //     model: 'provider',
                //     auto: true
                // },
            }
        },
    },
    app: {}
}