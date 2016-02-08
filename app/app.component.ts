import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {ColorComponent} from './color.component';
import {LightComponent} from './light.component';
import {WavelengthComponent} from './wavelength.component';
import {ButtonsComponent} from './buttons.component';

@Component({
    selector: 'light-ng2',
    templateUrl: 'app/app.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {path: '/light', name: 'Light', component: LightComponent, useAsDefault: true},
    {path: '/color', name: 'Color', component: ColorComponent},
    {path: '/wavelength', name: 'Wavelength', component: WavelengthComponent}
])
export class AppComponent {
    public title = 'Light in Angular2';
}
