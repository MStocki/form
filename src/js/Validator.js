export default class Validator {
    /**
     * @param {object} options
     * @param {ValidatorRegex} regex
     * @param {boolean} required
     * @param {Number} options.minValue
     * @param {Number} options.maxValue
     * @param {Number} options.maxLength
     */
    constructor(regex, required, options = {}){
        this._regex = regex;
        this._required = required;
        this.minValue = options.minValue;
        this.maxValue = options.maxValue;
        this.maxLength = options.maxLength;
    }

    /**
     *
     * @param {string} value
     * @returns {boolean}
     */
    isValid(value){
        if (this._required === false){
            if (value.length === 0){
                return true;
            }
        }

        if (value < this.minValue || value > this.maxValue || value.length > this.maxLength){
            return false;
        }
        
        return this._regex.test(value);
    }
}
