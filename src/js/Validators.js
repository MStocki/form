import ValidatorRegex from '@/js/ValidatorRegex';
import Validator from '@/js/Validator';

export default {
    EMAIL: new Validator(ValidatorRegex.email, true),
    NOT_EMPTY_STRING: new Validator(ValidatorRegex.nonEmptyString, true),
    NOT_EMPTY_STRING_NOT_REQUIRED: new Validator(ValidatorRegex.nonEmptyString, false),
    NUMBER_REQUIRED: new Validator(ValidatorRegex.number, true),
    RATING: new Validator(ValidatorRegex.number, true, { minValue: 1, maxValue: 10 }),
    TEXT_AREA: new Validator(ValidatorRegex.nonEmptyString, false, { maxLength: 500 }),
};