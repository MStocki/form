export class FormField {
    /**
     *
     * @param {object} options
     * @param {string} options.label
     * @param {Validator} options.validator
     * @param {FormFieldType} options.type
     */
    constructor(options){
        this.label = options.label;
        this.value = '';
        this.validator = options.validator;
        this.type = options.type;
    }

    /**
     *
     * @returns {boolean}
     */
    isValid(){
        return this.validator.isValid(this.value);
    }

    /**
     *
     * @returns {string}
     */
    printForSummary(){
        return this.label + ': ' + this.printValue();

    }

    /**
     *
     * @returns {string}
     */
    getValue(){
        return this.value;
    }

    /**
     *
     * @returns {string}
     */
    printValue(){
        if (this.value.length === 0){
            return '-';
        }
        return this.value;
    }
}