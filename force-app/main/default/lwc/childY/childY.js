import { LightningElement,track,api } from 'lwc';

export default class ChildY extends LightningElement {

    @track trackParam = "trackValue";
    @api apiParam = "apiValue";
    nonReactiveProp = "nonReactiveProperty";

    handleParamValues(){
        this.trackParam = "Value changed for trackParam";
        this.apiParam = "Value changed for apiParam";
        this.nonReactiveProp = "Value changed for nonReactiveParam";

    }
}