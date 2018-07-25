
export interface Section {
    sectionType             : String;
    sectionSubType          : any;
    sectionVersion          : number;

    // This is a terrible hack because typescript interfaces don't seem to allow excess properties for whatever reason
    // It allows you to declare object literals that have properties that ate not in the interface
    [propertName : string]  : any;
}