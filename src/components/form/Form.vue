<template>
    <div>
        <div class="header">
            <h1>{{ stepHeader }}</h1>
        </div>
        <div class="content">
            <EntryFieldValues
                v-if="currentStep !== Steps.Summary"
                :step-data="stepData"
            />
            <Summary
                v-else
                :user-data="userData"
            />
        </div>
        <div class="footer">
            <div>
                <button
                    v-if="showBackButton"
                    @click="handleBackClick"
                >
                    {{ backButtonLabel }}
                </button>
            </div>
            <div>
                <button
                    @click="handleNextClick"
                >
                    {{ nextButtonLabel }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import EntryFieldValues from './steps/EntryFieldValues.vue';
import Summary from '@/components/form/steps/Summary';
import Steps from '@/js/Steps.js';
import UserData from '@/js/UserData.js';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { sendForm } from '@/js/api/FormApi';

@Component({
    components: {
        Summary,
        EntryFieldValues,
    },
})
export default class FormLayout extends Vue {
    data(){
        return {
            Steps: Steps,
            currentStep: Steps.ClientData,
            userData: new UserData(),
        };
    }

    get backButtonLabel(){
        return 'back';
    }

    get nextButtonLabel(){
        return this.currentStep !== Steps.Summary ? 'next' : 'send'; 
    }

    /**
     *
     * @returns {boolean}
     */
    get showBackButton(){
        return this.currentStep !== Steps.ClientData;
    }

    /**
     * @returns {StepData}
     */
    get stepData(){
        if (this.currentStep === Steps.ClientData){
            return this.userData.clientData;
        } else if (this.currentStep === Steps.Evaluations){
            return this.userData.evaluations;
        }
        return undefined;
    }

    /**
     *
     * @returns {string}
     */
    get stepHeader(){
        switch (this.currentStep){
            case Steps.ClientData:
                return 'ClientData';
            case Steps.Evaluations:
                return 'Evaluations';
            case Steps.Summary:
                return 'Summary';
            default:
                return '';
        }
    }

    handleBackClick(){
        if (this.showBackButton){
            this.currentStep--;
        }
    }

    handleNextClick(){
        if(this.currentStep === Steps.Summary) {
            sendForm(this.userData);
            return;
        }

        if(this.userData.isValidStepData(this.currentStep)) {
            this.currentStep++;
        }
    }

    /**
     *
     * @returns {boolean}
     */
    isValidStep(){
        return this.userData.isValidStepData(this.currentStep);
    }
}
</script>
