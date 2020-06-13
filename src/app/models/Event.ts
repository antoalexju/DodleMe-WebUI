import {Time} from "./Time";

export class _Event {
    idEvent:number;
    creator:number;
    linkId:string;
    title: string;
    location:string;
    description:string;
    limitDate:string;
    status:string;
    isPrivate:boolean;
    participants: number;
    finalDate: string;
    times: Time[];
    begin: string;
    end: string;
}
