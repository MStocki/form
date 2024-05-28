<template>
    <div>
        <div class="label">
            {{ formField.label }}
        </div>
        
        <input
            v-if="formField.type === FormFieldType.INPUT"
            v-model="formField.value"
            :placeholder="formField.label"
            type="text"
        />
        <textarea 
            v-else-if="formField.type === FormFieldType.TEXT_AREA"
            v-model="formField.value"
            :placeholder="formField.label"
        />
    </div>
</template>
<script>
import Vue from "vue";
import { FormField } from "@/js/FormField";
import { Prop, Component } from "vue-property-decorator";
import FormFieldType from '@/js/FormFieldType';

@Component({
	components: {
		
	},
})
export default class FormEntry extends Vue {
	@Prop({ type: FormField, required: true }) formField;

    data(){
        return {
            FormFieldType: FormFieldType,
        };
    }
}
</script>

