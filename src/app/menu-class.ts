import { Routes } from '@angular/router';

export class MenuClass {
    name: String;
    router: Routes;

    constructor(name) {
        this.name = name;
    }
}
