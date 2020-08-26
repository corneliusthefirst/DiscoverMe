/* eslint-disable prettier/prettier */
//import { observable , action} from 'mobx';

 class  observedVariables {

 previousDay= '0';
 previousSendState = false;
 previousReceivedState = false;

 setPreviousDay = (day) => {
    this.previousDay = day;
 }
 setPreviousSendState= (state) => {
    this.previousSendState = state;
 }

 setPreviousReceivedState = (state) => {
    this.previousReceivedState = state;
 }

 }

const ObservedVariables = new observedVariables();
export default ObservedVariables;
