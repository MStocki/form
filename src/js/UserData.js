import ClientData from '@/js/ClientData';
import Evaluations from '@/js/Evaluations';
import Steps from '@/js/Steps';

export default class UserData {

    constructor(){
        this.clientData = new ClientData();
        this.evaluations = new Evaluations();
    }
    
    /**
     *
     * @param {Steps}step
     * @returns {boolean}
     */
    isValidStepData(step){
        switch (step){
            case Steps.ClientData:
                return this.clientData.isValid();
            case Steps.Evaluations:
                return this.evaluations.isValid();
            default:
                return true;
        }
    }

    /**
     *
     * @returns {string}
     */
    printSummary(){
        return `
        <p>${this.clientData.printSummary()}</p>
        <p>${this.evaluations.printSummary()}</p>
        `;
    }
}
