import fs from 'fs';


export default class Local {

    constructor () {
        this._result = {};
    }

    isConnected () {
        return true;
    }

    connect () {
        return this
    }

    db () {
        return this
    }

    collection (tbName) {
        return this
    }

    find (query = {}) {
        let rawdata = fs.readFileSync('src/drivers/local-db/local.json');
        this._result = JSON.parse(rawdata);

        if (query.current_state) {
            this._result = this._result.filter((issue) => issue.current_state == 'done');
        }

        return this;
    }

    toArray () {
        return this._result;
    }

}
