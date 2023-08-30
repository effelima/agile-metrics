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

    getAll() {
        return this.#model
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

        let issues_per_state = {
            to_do : [],
            doing : [],
            done : []
        }

        this.#model.forEach((issue,i) => {
            if (issue.current_state == 'to do') {
                issues_per_state.to_do.push(issue)
            } else {
                if (issue.current_state == 'doing') {
                    issues_per_state.doing.push(issue)
                } else {
                    issues_per_state.done.push(issue)
                }
            }
        })


        let lt_weeks = []
        // let frequency = []
        issues_per_state.done.forEach((lt,i) => {
            lt_weeks.push(lt.lt_weeks)
            /**
             * useless for now
             
            if (! frequency.find(item => item.lt == lt.lt_weeks))
                frequency.push({lt : lt.lt_weeks, frequency : 0})
            
            for(let j=0; j<frequency.length; j++) {
                if (frequency[j].lt === lt.lt_weeks)
                    frequency[j].frequency++
            }
            */
        })

        /*
         * useless for now

        let px = 0
        let p = 0
        issues_per_state.done.forEach((lt, i) => {
            let w = frequency.find(item => item.lt == lt.lt_weeks)
            px += w.frequency * lt.lt_weeks
            p += w.frequency
        })
        */

        let std = Mathjs.std(lt_weeks)
        let mean = Mathjs.mean(lt_weeks)
        let total_samples = lt_weeks.length

        // using confidence formula
        let upper_limit = mean + 1.28 * (std / Mathjs.sqrt(total_samples))
        let lower_limit = mean - 1.28 * (std / Mathjs.sqrt(total_samples))

        return {
            limit : {
                upper : upper_limit,
                lower : lower_limit
            },
            // fr : frequency,
            lt : lt_weeks
        }





        return issues_per_state


        let total_lt = this.#lead_time.length
        let sum_total_lt = 0
        let variance = 0
        

        for (let i=0; i<total_lt; i++) {
            sum_total_lt += this.#lead_time[i]
        }

        let proportion_average = 1/total_lt * (sum_total_lt)
        let NP = proportion_average * 100

        // dentro da amostra coletada, quantos foram entregues, após isso, calculamos a proporção
        // no periodo coletado, qual o total de itens? desse total, quantos foram entregues?
        // com essas respostas, chegaremos na proporção de entregas

        return NP

        variance = sum_of_squares / total_lt
        let std_deviation = Mathjs.sqrt(variance)

        this.#sigma = (3 * std_deviation) + this.#average_lt

        return this.#sigma
    }

}

module.exports = IssueModel