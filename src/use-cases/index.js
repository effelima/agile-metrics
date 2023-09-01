import makeListLeadTime from './list-lead-time.js'
import makeListUpperLowerLimits from './list-upper-lower-limits.js'
import leadTimeDb from '../data-access/index.js'

const listLeadTime = makeListLeadTime({ leadTimeDb })
const listUpperLowerLimits = makeListUpperLowerLimits({ leadTimeDb, Math })

const leadTimeService = Object.freeze({
    listLeadTime,
    listUpperLowerLimits
})
  
export default leadTimeService
export { listLeadTime, listUpperLowerLimits }