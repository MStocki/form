export default class StepData {

    constructor(){
    }

    /**
     * @returns {Array<FormField>}
     */
    getFields(){
        return Object.keys(this);
    }

    /**
     * @returns {boolean}
     */
    isValid(){
        let valid = true;
        this.getFields().forEach((field) => {
            if (field.isValid() === false){
                valid = false;
            }
        });
        return valid;
    }


    /**
     * @returns {string}
     */
    printSummary(){
        return this.getFields().map(field => field.printForSummary())
    }
}