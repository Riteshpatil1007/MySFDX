import { LightningElement,track,wire } from 'lwc';
import getContactList from '@salesforce/apex/contactListCtrl.getContactList';

export default class ContactListCmp extends LightningElement {

    @track conList;

   // @wire(getContactList) conList;

   @wire (getContactList)
    contactList({data,error}){
        if(data){
            this.conList = data;
        }
        else if(error){
            console.log('error #:'+ error );
        }
    }
}