import { FormField } from "@/js/FormField";
import Validators from "@/js/Validators";
import StepData from "./StepData";
import FormFieldType from '@/js/FormFieldType';

export default class ClientData extends StepData {

	constructor() {
		super();
		this.firstName = new FormField({
            label: 'First Name',
            validator: Validators.NOT_EMPTY_STRING,
            type: FormFieldType.INPUT,
        });
		this.lastName = new FormField({
            label: 'Last Name',
            validator: Validators.NOT_EMPTY_STRING,
            type: FormFieldType.INPUT,
        });
		this.companyName = new FormField({
            label: 'Company Name',
            validator: Validators.NOT_EMPTY_STRING_NOT_REQUIRED,
            type: FormFieldType.INPUT,
        });
		this.email = new FormField({
            label: 'Email',
            validator: Validators.EMAIL,
            type: FormFieldType.INPUT,
        });
	}
	
	getFields() {
        return [
			this.firstName,
			this.lastName,
			this.companyName,
			this.email,
		];
    }
}
