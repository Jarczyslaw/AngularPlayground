import { ObjectId } from 'bson';

export interface TaskModel {
    _id: ObjectId;
    name: string;
    created: Date;
    end?: Date;
    isDone: boolean;
}