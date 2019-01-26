import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-ok-icon',
    templateUrl: './ok-icon.component.html',
    styleUrls: [ './ok-icon.component.scss' ]
})
export class OkIconComponent {

    @Input() public ok: boolean;

}
