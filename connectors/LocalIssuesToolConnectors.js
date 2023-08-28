const FakeDataGenerator = require('../generators/FakeDataGenerator')

class LocalIssuesToolConnectors {
    
    constructor() {
        return this.get()
    }

    get() {
        let generate_data = new FakeDataGenerator()
        return generate_data.generate()
    }
}

module.exports = LocalIssuesToolConnectors