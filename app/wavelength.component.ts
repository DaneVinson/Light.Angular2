import {Component} from 'angular2/core';

@Component({
  selector: 'light-wavelength',
  templateUrl: 'app/wavelength.html'
})
export class WavelengthComponent {
    public title = 'Wavelength of Light';
    public wavelength: number = null;
    
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
