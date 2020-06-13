import {Time} from "./Time";

export class _Event {
    title: string;
    creator: number;
    participants: number;
    location: string;
    description: string;
    limitDate: string;
    isPrivate: boolean;
    linkId: string;
    status: string;
    finalDate: string;
    times: Time[];
    begin: string;
    end: string;
}