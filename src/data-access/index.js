import makeLeadTimeDb from './issues-db.js'
import makeDataBaseConn from '../drivers/index.js'

const client = makeDataBaseConn

export async function makeDb () {
    if (!client.isConnected()) {
        await client.connect()
    }
    return client.db()

}


const leadTimeDb = makeLeadTimeDb({ makeDb })
export default leadTimeDb