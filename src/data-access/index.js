import makeLeadTimeDb from './issues-db.js'
import DB from '../drivers/index.js'

const client = new DB()

export async function makeDb () {
    if (! client.isLocal()) {
        if (!client.isConnected()) {
            await client.connect()
        }
        return client.db(dbName)
    }
    return client
}


const leadTimeDb = makeLeadTimeDb({ makeDb })
export default leadTimeDb