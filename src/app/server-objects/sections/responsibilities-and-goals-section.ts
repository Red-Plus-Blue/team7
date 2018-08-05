import { Section } from '../section'
import { ResponsibilitiesGoalsMeasuresEntry } from '../section-entries/responsibilities-goals-measures-entry';

export interface ResponsibilitiesAndGoalsSection extends Section {
    goals           : ResponsibilitiesGoalsMeasuresEntry[];
}