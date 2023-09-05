import makeGetLeadTime from './get-lead-time.js'
import makeGetUpperLowerLimits from './get-upper-lower-limits.js'
import makeGetEstimation from './get-estimation.js'
import {
    listLeadTime,
    listUpperLowerLimits,
    listEstimation
} from '../use-cases/index.js'


const getLeadTime = makeGetLeadTime({ listLeadTime })
const getUpperLowerLimits = makeGetUpperLowerLimits({ listUpperLowerLimits })
const getEstimation = makeGetEstimation({ listEstimation })

const leadTimeController = Object.freeze({
    getLeadTime,
    getUpperLowerLimits,
    getEstimation
})
  
export default leadTimeController
export { getLeadTime, getUpperLowerLimits, getEstimation }