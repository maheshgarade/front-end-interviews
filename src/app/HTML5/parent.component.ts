import { Component } from "@angular/core";

@Component({
    selector: 'parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']

})

export class ParentComponent {

    outer() {
        console.log('outer div');
    }

    middle(){
        console.log('middle div');
    }

    innermost() {
        console.log('innermost div');
    }

    
}
