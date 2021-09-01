import { LightningElement,api } from 'lwc';

export default class ZChild extends LightningElement {

    @api myName = "first Value";
    @api myCity = "Pune";
    @api myMob = "16584632";

    @api testChildMethod(parentParam){
        alert('This is Child Method '+ parentParam.firstName+' '+ parentParam.city);
    }
}