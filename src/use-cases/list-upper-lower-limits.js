import { std, mean, sqrt } from 'mathjs'

export default function makeUpperLowerLimits ({ leadTimeDb }) {
    return async function listUpperLowerLimits({ teamId }) {

        if (!teamId) {
            throw new Error('You must supply a team id.')
        }
        const doneIssues = await leadTimeDb.findDoneIssuesByTeamId({
            teamId
        })

        const weekLeadTime = doneIssues.map(( week ) => week.lt_weeks )
        const stdLeadTime = std(weekLeadTime)
        const meanLeadTime = mean(weekLeadTime)
        const countLeadTime = weekLeadTime.length

        /**
         * Confidence Interval
         * 1.28 is used for 80% of confidence
         **/
        const leadTimeLimits = {
            upperLimit : meanLeadTime + 1.28 * (stdLeadTime / sqrt(countLeadTime)),
            lowerLimit : meanLeadTime - 1.28 * (stdLeadTime / sqrt(countLeadTime))
        }

        return leadTimeLimits
    }
  }