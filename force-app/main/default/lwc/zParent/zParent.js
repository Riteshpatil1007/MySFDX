import { LightningElement,track,api } from 'lwc';

export default class ZParent extends LightningElement {

    @track parentName = "Its zParent's @track NAME which is private only";
    @track parentCity = "Its zParent's @track CITY which is private only";
    @track parentMob = "111111111";

    handleclick(){
        this.parentName = "zParent's NAME function data...";
        this.parentCity = "zParent's CITY function data...";
        this.parentMob = '8805668908';
    }

    handlecall(){
        var childCompVar = this.template.querySelector('c-z-child');
        var sendParam = {'firstName':'Ritesh','city':'Kothali','myMob':'541655132'};
        childCompVar.testChildMethod(sendParam);
    }
}