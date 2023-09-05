import makeListUpperLowerLimits from './list-upper-lower-limits.js'

export default function makeEstimation ({ leadTimeDb }) {
    return async function listEstimation({ teamId, numberOfTasks }) {

        if (!teamId) {
            throw new Error('You must supply a team id.')
        }

        if (!numberOfTasks) {
            throw new Error('You must supply a number of tasks to deliver.')
        }

        const listUpperLowerLimits = makeListUpperLowerLimits({ leadTimeDb })
        const teamUpperLowerLimits = await listUpperLowerLimits({ teamId })

        

        return {
            upperLimit : teamUpperLowerLimits.upperLimit * numberOfTasks,
            lowerLimit : teamUpperLowerLimits.lowerLimit * numberOfTasks
        }

    }
  }