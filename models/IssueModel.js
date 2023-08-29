const Mathjs = require('mathjs')
const IssuesToolsConnectors = require('../connectors/IssuesToolsConnectors')

class IssueModel {

    #model
    #lead_time
    #average_lt
    #median_lt
    #mode_lt
    #mode_freq_lt
    #std_deviation
    #sigma = {inf : 0, sup : 0}

    constructor() {
        this.#model = new IssuesToolsConnectors()
        this.#lead_time = this.#model.map(a => a.lead_time)
    }

    getAllLt() {
        return this.#lead_time
    }

    getAverageLeadTime() {
        this.#average_lt = Mathjs.mean(this.#lead_time)
        return this.#average_lt
    }

    getMedianLeadTime() {
        this.#median_lt = Mathjs.median(this.#lead_time)
        return this.#median_lt
    }

    getModeLeadTime() {
        this.#mode_lt = Mathjs.mode(this.#lead_time)
        return this.#mode_lt
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
        
        this.#mode_freq_lt = frequency_mode
        return this.#mode_freq_lt
    }

    getStdDeviationLeadTime() {
        this.#std_deviation = Mathjs.std(this.#lead_time)
        return this.#std_deviation
    }

    getSigma() {
        // 3 is a value well know in six sigma
        let sigma = this.#std_deviation * 3
        this.#sigma.inf = this.#std_deviation - sigma
        this.#sigma.sup = this.#std_deviation + sigma

        return this.#sigma
    }

}

module.exports = IssueModel