import cluster  from 'cluster';

/*console.log(cluster.isPrimary)

if (cluster.isPrimary){
    console.log('proceso primario, generando un proceso trabajador')
    cluster.fork()
} else {
    console.log('Al ser un proceso forkeado, no cuento como primario, por lo tanto isPrimary:false')
}//*/

import { cpus } from 'os'
const numProcesadores = cpus().length
console.log(numProcesadores)

/*if (cluster.isPrimary){
    console.log('proceso primario, generando un proceso trabajador')
    for (let i=0;  i<numProcesadores; i++)
        cluster.fork()
} else {
    console.log('Al ser un proceso forkeado, no cuento como primario, por lo tanto isPrimary:false')
    console.log(`Process Worker ID: ${process.pid} started`)
}//*/
