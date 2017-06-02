import { Component, ViewEncapsulation } from "@angular/core";
import { styles } from './common/common.scss.shim.ngstyle';
import { HelperService } from "./common/helper.service";

@Component({
    selector: 'tep-app',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css', '../../node_modules/angular2-toaster/toaster.css', './common/common.scss'],
    providers: []
})

export class AppComponent {
    isAuthenticated = true;
    isAdmin = true;

    constructor(
    ) {
    }

}