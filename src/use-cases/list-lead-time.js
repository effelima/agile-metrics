export default function makeListLeadTime({ leadTimeDb }) {
    return async function listLeadTime({ teamId } = {}) {
        if (!teamId) {
            throw new Error('You must supply a team id.')
        }
        const leadTime = await leadTimeDb.findByTeamId({
            teamId
        })
        return leadTime
    }
}