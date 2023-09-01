import makeGetLeadTime from './get-lead-time.js'
import makeGetUpperLowerLimits from './get-upper-lower-limits.js'
import {
    listLeadTime,
    listUpperLowerLimits
} from '../use-cases/index.js'


const getLeadTime = makeGetLeadTime({ listLeadTime })
const getUpperLowerLimits = makeGetUpperLowerLimits({ listUpperLowerLimits })

const leadTimeController = Object.freeze({
    getLeadTime,
    getUpperLowerLimits
})
  
export default leadTimeController
export { getLeadTime, getUpperLowerLimits }