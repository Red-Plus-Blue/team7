import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../server-objects/section'
import { CommentsSection } from '../server-objects/sections/comments-section'

@Component({
  selector: 'app-section-comments',
  templateUrl: './section-comments.component.html',
  styleUrls: [
    '../../../node_modules/bootstrap/dist/css/bootstrap.css',
    '../../assets/css-common/common.css'
  ]
})
export class SectionCommentsComponent implements OnInit {

    @Input() inputSection: Section;
    section : CommentsSection;

    constructor() {
        
    }

    ngOnInit() {
        this.section = this.inputSection as CommentsSection;
    }

}
