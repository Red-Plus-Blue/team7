import { Section } from '../section'

export interface CoreValuesSection extends Section {
    coreValues : { [key : string] : number };
}