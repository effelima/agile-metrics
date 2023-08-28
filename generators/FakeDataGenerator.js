/**
 * Generate fake data just for test
 */

require('dotenv').config()

class FakeDataGenerator {

    generate() {

        let workflow_states = process.env.WORKFLOW_STATES.split(',')
        let workflow = []

        for (let i = 0; i < 40; i++) {

            let min = 1;
            let max = 90;
            let start_rnd = Math.floor(Math.random() * max) + min;
            let end_rnd = Math.floor(Math.random() * (start_rnd))            


            let start_date = new Date()
            let end_date = new Date()
            let date_now = [start_date, end_date]
            date_now[0].setDate(date_now[0].getDate() - start_rnd)
            date_now[1].setDate(date_now[1].getDate() - end_rnd)

            workflow.push({
                title : 'AAAAAA',
                current_state : process.env.WORKFLOW_DONE_STATE,
                states : []
            })

            workflow_states.forEach((v, j) => {
                workflow[i].states.push({
                    state_position: j,
                    state_name: v,
                    update_date: date_now[j],
                })
            })

        }

        return workflow

    }

}

module.exports = FakeDataGenerator