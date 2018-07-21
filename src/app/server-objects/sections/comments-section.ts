import { Section } from '../section'


export interface CommentsSection extends Section  {
    reviewerComments : string;
    employeeComments : string;
}