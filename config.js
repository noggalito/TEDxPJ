// # Ghost Configuration
var path = require('path'),
    config;

config = {
    // ### Production
    production: {
        url: 'http://2016.tedxparquejipiro.com',
        mail: {
          transport: "SMTP",
          options: {
            service: "Mailgun",
            auth: {
              user: process.env.MAILGUN_SMTP_LOGIN,
              pass: process.env.MAILGUN_SMTP_PASSWORD
            }
          }
        },
        database: {
          client: 'postgres',
          connection: {
            host: '127.0.0.1',
            user: process.env.DATABASE_TEDX_USER,
            password: process.env.DATABASE_TEDX_PASSWORD,
            database: process.env.DATABASE_TEDX_DATANAME
          },
            debug: false
        },

        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: process.env.PORT
        }
    },

    staging: {
      url: "https://tedxpj.herokuapp.com/",
      mail: {
        transport: "SMTP",
        options: {
          service: "Mailgun",
          auth: {
            user: process.env.MAILGUN_SMTP_LOGIN,
            pass: process.env.MAILGUN_SMTP_PASSWORD
          }
        }
      },
      database: {
        client: "postgres",
        connection: process.env.DATABASE_URL,
        debug: false
      },
      server: {
        host: '0.0.0.0',
        port: process.env.PORT
      }
    },

    // ### Development **(default)**
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        // Change this to your Ghost blogs published URL.
        url: 'http://localhost:2368',

        // Example mail config
        // Visit http://support.ghost.org/mail for instructions
        mail: {
          transport: 'SMTP',
          options: {
            service: 'Mailgun',
              auth: {
                user: 'postmaster@appc1ca874dfbd64aba92f31743e02cd5eb.mailgun.org',
                pass: '5a55f4e7a238fe244b3f3ab6fae46831'
              }
            }
         },

        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        server: {
            host: '127.0.0.1',
            port: '2368'
        },
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    },

    // **Developers only need to edit below here**
    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },
    'testing-mysql': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'mysql',
            connection: {
                host     : '127.0.0.1',
                user     : 'root',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },
    'testing-pg': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'pg',
            connection: {
                host     : '127.0.0.1',
                user     : 'postgres',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    }
};

// Export config
module.exports = config;
