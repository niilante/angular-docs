import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { AwesomePipe }        from './contact.awesome.pipe';
import
{ ContactComponent }   from './contact.component';
import { ContactService }     from './contact.service';
import { HighlightDirective } from './contact.highlight.directive';

@NgModule({
    imports:      [ CommonModule, FormsModule ],
    declarations: [ ContactComponent, HighlightDirective, AwesomePipe ],
    exports:      [ ContactComponent ],
    providers:    [ ContactService ]
})
export class ContactModule { }