import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

export class emailValidators {
    
    static isEmailFormat(formControl: FormControl) {
        var reg = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
        var input = formControl.value;
        if (input)
        {
            if (!reg.test(input))
                return {isEmailFormat: false}
            else 
                return null
        }
    }

}