import { Section } from '../section'

export interface CoreValuesSection extends Section {
    ratings : { [key : string] : number };
}