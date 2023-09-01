export default function makeGetLeadTime({ listLeadTime }) {
    return async function getLeadTime(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const teamLeadTime = await listLeadTime({
                teamId: httpRequest.query.teamId
            })

            return {
                headers,
                statusCode: 200,
                body: teamLeadTime
            }
        } catch (e) {
            // TODO: Error logging
            console.log(e)
            return {
                headers,
                statusCode: 400,
                body: {
                    error: e.message
                }
            }
        }
    }
}