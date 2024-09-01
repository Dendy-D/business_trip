import {ApplicationClass, IApplication} from "./ApplicationModel";

export interface IApplicationStatus {
    id?: string | null;
    code?: string | null;
    name?: string | null;
    description?: string | null;
    validTill?: Date | null;
    step?: number | null;
    applicationClass?: ApplicationClass | null;
    applications?: IApplication[] | null;
}

export class ApplicationStatus implements IApplicationStatus {
    constructor(
        public id?: string | null,
        public code?: string | null,
        public name?: string | null,
        public description?: string | null,
        public validTill?: Date | null,
        public step?: number | null,
        public applicationClass?: ApplicationClass | null,
        public applications?: IApplication[] | null
    ) {}

    static Instance(item: ApplicationStatus): ApplicationStatus {
        return new ApplicationStatus(
            item.id || null,
            item.code || null,
            item.name || null,
            item.description || null,
            item.validTill ? new Date(item.validTill) : null,
            item.step || null,
            item.applicationClass || null,
            item.applications || null
        );
    }
}