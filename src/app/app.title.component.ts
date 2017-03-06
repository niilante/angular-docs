import { Component, Input } from '@angular/core';
import {UserService} from "./user.service";

@Component({
    moduleId: module.id,
    selector: 'app-title',
    template: `<h1 highlight>{{title}} {{subtitle}}</h1>
                <p *ngIf="user">
                  <i>Welcome, {{user}}</i>
                </p>
                `
})
export class TitleComponent {
    @Input() subtitle = '';
    title = 'Angular Modules';
    user = '';

    constructor(userService: UserService) {
        this.user = userService.userName;
    }
}