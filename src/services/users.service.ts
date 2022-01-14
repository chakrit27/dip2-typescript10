import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";

import User,{UserDocument} from "../models/users"

export function createUser(input:DocumentDefinition<UserDocument>){
    return User.create(input)
}

export function findAndUpdate(
    query:FilterQuery<UserDocument>,
    update:UpdateQuery<UserDocument>,
    options:QueryOptions
){
    return User.findByIdAndUpdate(query,update,options);
}