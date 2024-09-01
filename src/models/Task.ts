export enum TaskState {
    CREATED = 'CREATED',
    COMPLETED = 'COMPLETED',
    DELETED = 'DELETED'
}

export interface ITask {
    id?: string | null;
    key?: number | null;
    variables?: string | null;
    name?: string | null;
    description?: string | null;
    assignee?: string | null;
    applicationId?: string | null;
    candidateGroup?: string | null;
    taskState?: TaskState | null;
    createdBy?: string | null;
    createdTime?: Date | null;
    lastModifiedBy?: string | null;
    lastModifiedDate?: Date | null;
    dueDate?: Date | null;
    completeDate?: Date | null;
    isOverdue?: boolean | null;
}

export class Task implements ITask {
    constructor(
        public id?: string | null,
        public key?: number | null,
        public variables?: string | null,
        public name?: string | null,
        public description?: string | null,
        public assignee?: string | null,
        public applicationId?: string | null,
        public candidateGroup?: string | null,
        public taskState?: TaskState | null,
        public createdBy?: string | null,
        public createdTime?: Date | null,
        public lastModifiedBy?: string | null,
        public lastModifiedDate?: Date | null,
        public dueDate?: Date | null,
        public completeDate?: Date | null,
        public isOverdue?: boolean | null
    ) {}

    static instance(item: Task): Task {
        return new Task(
            item.id || null,
            item.key || null,
            item.variables || null,
            item.name || null,
            item.description || null,
            item.assignee || null,
            item.applicationId || null,
            item.candidateGroup || null,
            item.taskState || null,
            item.createdBy || null,
            item.createdTime ? new Date(item.createdTime) : null,
            item.lastModifiedBy || null,
            item.lastModifiedDate ? new Date(item.lastModifiedDate) : null,
            item.dueDate ? new Date(item.dueDate) : null,
            item.completeDate ? new Date(item.completeDate) : null,
            item.isOverdue || null
        );
    }
}
