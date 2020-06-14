import {Time} from "./Time";
import {User} from "./User";

export class _Event {
    idEvent:number;
    userCreator: User;
    creator: number;
    linkId:string;
    title: string;
    location:string;
    description:string;
    limitDate:string;
    status:string;
    isPrivate:boolean;
    participants: number;
    finalDate: Date;
    times: Time[];
    begin: Date;
    end: Date;
    creatorname: string;
}
