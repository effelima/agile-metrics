/**
 * Generate fake data just to test
 */

require('dotenv').config()

class FakeDataGenerator {

    constructor() {
        return this.generate()
    }

    generate() {

        let workflow_states = process.env.WORKFLOW_STATES.split(',')
        let workflow = []

        for(let i=0;i<10;i++) {

            workflow_states.forEach((v, j) => {
                workflow.push({
                    state_position : j,
                    state_name : v,
                    start_date : new Date(),
                    end_date : new Date()
                })
            })

        }

        console.log(workflow)
    }

}

module.exports = new FakeDataGenerator()