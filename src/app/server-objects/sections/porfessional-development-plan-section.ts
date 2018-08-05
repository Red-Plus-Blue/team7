import { Section } from '../section'
import { ProfessionalDevelopmentPlanEntry } from '../section-entries/professional-development-plan-entry';

export interface ProfessionalDevelopmentPlanSection extends Section {
    goals   : ProfessionalDevelopmentPlanEntry[];
}