import makeListLeadTime from './list-lead-time.js'
import makeListUpperLowerLimits from './list-upper-lower-limits.js'
import makeEstimation from './list-estimation.js'
import leadTimeDb from '../data-access/index.js'

const listLeadTime = makeListLeadTime({ leadTimeDb })
const listUpperLowerLimits = makeListUpperLowerLimits({ leadTimeDb })
const listEstimation = makeEstimation({ leadTimeDb })

const leadTimeService = Object.freeze({
    listLeadTime,
    listUpperLowerLimits,
    listEstimation
})
  
export default leadTimeService
export { listLeadTime, listUpperLowerLimits, listEstimation }