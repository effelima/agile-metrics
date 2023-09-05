import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import {
    getLeadTime,
    getUpperLowerLimits,
    getEstimation
} from './controllers/index.js'

import makeCallback from './express-callback/index.js'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const apiRoot = process.env.API_ROOT
const app = express()

app.use(bodyParser.json())

app.use((_, res, next) => {
    res.set({ Tk: '!' })
    next()
})

app.get(`${apiRoot}/lead-time`, makeCallback(getLeadTime))
app.get(`${apiRoot}/get-upper-lower-limits`, makeCallback(getUpperLowerLimits))
app.get(`${apiRoot}/get-estimation`, makeCallback(getEstimation))


// listen for requests
app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})


export default app