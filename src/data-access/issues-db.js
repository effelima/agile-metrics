// import Id from '../Id'

export default function makeLeadTimeDb ({ makeDb }) {
    return Object.freeze({
        findByTeamId,
        findDoneIssuesByTeamId
    })

    async function findByTeamId ({ teamId, daysAgo = 90 } = {}) {
        const db = await makeDb()
        const query = daysAgo ? { created_date: '-90d', closed_date: '-90d' } : {}
        query.teamId = teamId
        const result = await db.collection('issues').find(query)
        
        return (await result.toArray()).map(({ 
            _id: id,
            ...found
        }) => ({
            id,
            ...found
        }))
    }

    async function findDoneIssuesByTeamId ({ teamId, daysAgo = 90 } = {}) {
        const db = await makeDb()
        const query = daysAgo ? { created_date: `-${daysAgo}d` } : {}
        query.teamId = teamId
        query.current_state = 'done'
        const result = await db.collection('issues').find(query)
        
        const issues = (await result.toArray()).map(({ 
            _id: id,
            ...found
        }) => ({
            id,
            ...found
        }))

        return issues.filter((issue) => issue.current_state == 'done') 
    }

}