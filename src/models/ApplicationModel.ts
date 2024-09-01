import {ApplicationStatus} from "./ApplicationStatus";

export enum ApplicationClass {
    PURCHASE = 'PURCHASE',
    BUDGETING = 'BUDGETING',
}

export interface IApplication {
    applicationClass: ApplicationClass;
    createdBy?: string | null;
    id?: string | null;
    createdTime?: Date | null;
    lastModifiedBy?: string | null;
    lastModifiedDate?: Date | null;
    number?: number | null;
    code?: string | null;
    name?: string | null;
    processInstanceId?: string | null;
    openDate?: Date | null;
    plannedDate?: Date | null;
    actualDate?: Date | null;
    description?: string | null;
    applicationStatus?: ApplicationStatus | null;
}

export class ApplicationModel implements IApplication {
    constructor(
        public applicationClass: ApplicationClass,
        public createdBy?: string | null,
        public id?: string | null,
        public code?: string | null,
        public name?: string | null,
        public number: number | null = null,
        public processInstanceId: string | null = null,
        public openDate: Date | null = null,
        public plannedDate: Date | null = null,
        public actualDate: Date | null = null,
        public description: string | null = null,
        public createdTime?: Date | null,
        public lastModifiedBy?: string | null,
        public lastModifiedDate?: Date | null,
        public applicationStatus?: ApplicationStatus | null,
    ) {}

    static Instance(item: ApplicationModel): ApplicationModel {
        return new ApplicationModel(
            item.applicationClass,
            item.createdBy || null,
            item.id || null,
            item.code || null,
            item.name || null,
            item.number || null,
            item.processInstanceId || null,
            item.openDate || null,
            item.plannedDate || null,
            item.actualDate || null,
            item.description || null,
            item.createdTime ? new Date(item.createdTime) : null,
            item.lastModifiedBy || null,
            item.lastModifiedDate ? new Date(item.lastModifiedDate) : null,
            item.applicationStatus || null
        );
    }
}