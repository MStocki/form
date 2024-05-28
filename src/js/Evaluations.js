import { FormField } from "@/js/FormField";
import Validators from "@/js/Validators";
import StepData from "./StepData";
import FormFieldType from '@/js/FormFieldType';

export default class Evaluations extends StepData {

	constructor() {
		super();
		this.speakerRating = new FormField({
            label: 'Speaker - rating',
            validator: Validators.RATING,
            type: FormFieldType.INPUT,
        });
		this.speakerComment = new FormField({
            label: 'Speaker - comment',
            validator: Validators.TEXT_AREA,
            type: FormFieldType.TEXT_AREA,
        });
		this.methodologyRating = new FormField({
            label: 'Methodology - rating',
            validator: Validators.RATING,
            type: FormFieldType.INPUT,
        });
		this.methodologyComment = new FormField({
            label: 'Methodology - comment',
            validator: Validators.TEXT_AREA,
            type: FormFieldType.TEXT_AREA,
        });
		this.cateringRating = new FormField({
            label: 'Catering - rating',
            validator: Validators.RATING,
            type: FormFieldType.INPUT,
        });
		this.cateringComment = new FormField({
            label: 'Catering - comment',
            validator: Validators.TEXT_AREA,
            type: FormFieldType.TEXT_AREA,
        });
	}

	getFields() {
        return [
			this.speakerRating,
			this.speakerComment,
			this.methodologyRating,
			this.methodologyComment,
			this.cateringRating,
			this.cateringComment,
		];
    }
}