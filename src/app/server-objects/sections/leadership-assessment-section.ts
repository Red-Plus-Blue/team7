import { Section } from '../section'

export interface LeadershipAssessmentSection extends Section {
    ratings : { [key : string] : number };
}