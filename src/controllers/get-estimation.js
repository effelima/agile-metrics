export default function makeGetEstimation({ listEstimation }) {
    return async function getEstimation(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const teamEstimation = await listEstimation({
                teamId: httpRequest.query.teamId,
                numberOfTasks : httpRequest.query.numberOfTasks
            })

            return {
                headers,
                statusCode: 200,
                body: teamEstimation
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