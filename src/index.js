import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import {
    getLeadTime,
    getUpperLowerLimits
} from './controllers/index.js'

import makeCallback from './express-callback/index.js'

dotenv.config()

const apiRoot = process.env.DM_API_ROOT
const app = express()

app.use(bodyParser.json())

app.use((_, res, next) => {
    res.set({ Tk: '!' })
    next()
})

app.get(`${apiRoot}/lead-time`, makeCallback(getLeadTime))
app.get(`${apiRoot}/get-upper-lower-limits`, makeCallback(getUpperLowerLimits))


// listen for re;quests
app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})


export default app