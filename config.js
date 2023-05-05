var config = {
	debug: false,
	database: {
	    connectionLimit: 500,
	    host: "151.106.100.47",
	    user: "slatcorp_dba",
	    password: "THEbeasT666",
	    database: "sltacorp_send",
	    charset : "utf8mb4",
	    debug: false,
	    waitForConnections: true,
	    multipleStatements: true
	},
	cors: {
		origin: '*',
 		optionsSuccessStatus: 200
	}
}

module.exports = config; 