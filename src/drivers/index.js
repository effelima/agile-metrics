import dotenv from 'dotenv'
import Local from './local.js'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const dataBase = { Local }
const dataBaseDriver = process.env.DB_DRIVER
const dataBaseConn = new dataBase[dataBaseDriver]

export default dataBaseConn