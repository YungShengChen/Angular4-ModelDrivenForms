import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

export class lastnameValidators {
    
    static cannotContainNumber(formControl: FormControl) {

        var input:string = formControl.value;
        if (input)
        {   
            var isNumber:boolean = (
                input.indexOf('0') > -1 ||
                input.indexOf('1') > -1 ||
                input.indexOf('2') > -1 ||
                input.indexOf('3') > -1 ||
                input.indexOf('4') > -1 ||
                input.indexOf('5') > -1 ||
                input.indexOf('6') > -1 ||
                input.indexOf('7') > -1 ||
                input.indexOf('8') > -1 ||
                input.indexOf('9') > -1);
           
            if (isNumber)
                return {cannotContainNumber: true}
            else
                return null;
        }
        return null;
    }

    static cannotContainSpace (formControl: FormControl) {
        var input:string = formControl.value;
        if (input.indexOf(' ') > -1)
            return {cannotContainSpace: true}
        else
            return null
    }

  

}