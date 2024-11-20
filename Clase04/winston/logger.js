const { createLogger, format, transports } = require("winston")

const logger =  createLogger({
    level: 'silly', //Nivel Minimo a registrar: error, info, warn, debug, verbose, silly
    format:  format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.printf(info => `${info.timestamp} - ${info.level}: ${info.message}`)
    ),
    transports: [
        new transports.Console(), //Imprime en consola
        new transports.File({ filename: 'logs/combined.log' }), //Imprime TODO
        new transports.File({ filename: 'logs/error.log', level: 'error' }), //Imprime ERRORES
    ]
})

// Si estamos en desarrollo, podemos agregar un formato más legible en la consola
if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
        format: format.combine(
            format.colorize(), //variedad de colores
            format.simple()
        )
    }))
}

module.exports = logger