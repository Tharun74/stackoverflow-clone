import { Permission } from "appwrite";
import { db, commentCollection } from "../name"
import { databases } from "./config"

export async function createCommentsCollection(){
    await databases.createCollection(db,commentCollection,commentCollection,
        [
            Permission.read("any"),
            Permission.read("users"),
            Permission.write("users"),
            Permission.create("users"),
            Permission.delete("users") 
        ]
    )

    await Promise.all([
        databases.createStringAttribute(db,commentCollection,"content",10000,true),
        databases.createStringAttribute(db,commentCollection,"authorId",50,true),
        databases.createEnumAttribute(db,commentCollection,"type",["question","answer"],true),
        databases.createStringAttribute(db,commentCollection,"typeId",50,true),
    ]);
}