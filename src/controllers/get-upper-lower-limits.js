export default function makeUpperLowerLimits({ listUpperLowerLimits }) {
    return async function getUpperLowerLimits(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const teamUpperLowerLimits = await listUpperLowerLimits({
                teamId: httpRequest.query.teamId
            })

            return {
                headers,
                statusCode: 200,
                body: teamUpperLowerLimits
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