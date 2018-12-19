const timeout = process.env.DEBUG ? 99999999 : 100000

exports.config = {
    
    specs: [
        './test/login.spec.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
   
    maxInstances: 10,
   
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome'
    }],
   
    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    screenshotPath: './errorShots/',
    baseUrl: 'https://www.amazon.ca',
    waitforTimeout: 10000,
   
    connectionRetryTimeout: 90000,
    
    connectionRetryCount: 3,
    
    services: ['selenium-standalone'],
    
    framework: 'mocha',
    
    reporters: ['dot','spec'],
  
    mochaOpts: {
        ui: 'tdd',
        timeout: timeout
    },
   
}
