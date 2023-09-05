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

        const leadTimeUpperLimit = meanLeadTime + 1.28 * (stdLeadTime / sqrt(countLeadTime))
        const leadTimeDownLimit = meanLeadTime - 1.28 * (stdLeadTime / sqrt(countLeadTime))

        return {
            upperLimit : leadTimeUpperLimit,
            lowerLimit : leadTimeDownLimit
        }
    }
  }