const Mathjs = require('mathjs')
const IssuesToolsConnectors = require('../connectors/IssuesToolsConnectors')

class IssueModel {

    #model
    #lead_time

    constructor() {
        this.#model = new IssuesToolsConnectors()
        this.#lead_time = this.#model.map(a => a.lead_time)
    }

    getAverageLeadTime() {
        let average = Mathjs.mean(this.#lead_time)
        return average
    }

    getMedianLeadTime() {
        let median = Mathjs.median(this.#lead_time)
        return median
    }

    getModeLeadTime() {
        let mode = Mathjs.mode(this.#lead_time)
        return mode
    }

    getModeFrequencyLeadTime() {
        let mode = Mathjs.mode(this.#lead_time)
        let frequency_mode = []
        mode.forEach((m,i) => {
            
            frequency_mode.push({
                mode : m,
                frequency : 0
            })

            this.#lead_time.forEach((lt, j) => {
                if (lt == frequency_mode[i].mode)
                    frequency_mode[i].frequency++
            })
        })
        return frequency_mode
    }
}

module.exports = IssueModel