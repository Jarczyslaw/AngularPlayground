import { ObjectId } from 'bson';

export interface TaskModel {
    _id: ObjectId;
    name: string;
    created: string;
    end?: string;
    isDone: boolean;
}