import { Component, OnInit, Input } from '@angular/core';
import { SignaturesSection } from '../server-objects/sections/signatures-section';
import { Section } from '../server-objects/section';

@Component({
  selector: 'app-section-signatures',
  templateUrl: './section-signatures.component.html',
  styleUrls: [
    '../../../node_modules/bootstrap/dist/css/bootstrap.css',
    '../../assets/css-common/common.css'
  ]
})
export class SectionSignaturesComponent implements OnInit {

    section : SignaturesSection;
    @Input() inputSection : Section;

    constructor() { }

    ngOnInit() {
        this.section = this.inputSection as SignaturesSection;
        console.log(this.section.signatures);
    }

}
