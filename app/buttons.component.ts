import {Component, Input} from 'angular2/core';

@Component({
    selector: 'light-buttons',
    templateUrl: 'app/buttons.html'
})
export class ButtonsComponent {
    @Input() wavelengthObject: IWavelength;
    
    setWavelength(wavelength: number) {
        this.wavelengthObject.setWavelength(wavelength);
    }
}
