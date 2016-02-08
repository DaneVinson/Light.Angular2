import {Component} from 'angular2/core';
import {ButtonsComponent} from './buttons.component';

@Component({
    directives: [ButtonsComponent],
    selector: 'light-wavelength',
    templateUrl: 'app/wavelength.html'
})
export class WavelengthComponent implements IWavelength {
    public title = 'Wavelength of Light';
    public vm = this;
    public wavelength: number = null;
    
    getWavelength(){
        return this.wavelength;
    }
    setWavelength(wavelength: number) {
        this.wavelength = wavelength;
    }

    get signalWidth() {
        if (this.wavelength >= 380 && this.wavelength <= 780) {
            return this.wavelength;
        }
        else {
            return 0;
        }
    }
}
