import {db, questionCollection} from "../name"
import { databases } from "./config"
import { Permission } from "appwrite"

export async function createQuestionCollection(){
    await databases.createCollection(db,questionCollection,questionCollection,
        [
            Permission.read("any"),
            Permission.read("users"),
            Permission.write("users"),
            Permission.create("users"),
            Permission.delete("users") 
        ]
    )
    console.log("Collection created")

    await Promise.all([
        databases.createStringAttribute(db,questionCollection,"title",100,true),
        databases.createStringAttribute(db,questionCollection,"content",10000,true),
        databases.createStringAttribute(db,questionCollection,"tags",50,true,undefined,true),
        databases.createStringAttribute(db,questionCollection,"authorId",50,true),
        databases.createStringAttribute(db,questionCollection,"attachementId",50,false),
    ]);
    console.log("Questions Attributes created")
    
    
}


