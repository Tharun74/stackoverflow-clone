import { Permission } from "appwrite";
import { db, answerCollection } from "../name"
import { databases } from "./config"

export async function createAnswerCollection() {
    await databases.createCollection(db, answerCollection, answerCollection,
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
        databases.createStringAttribute(db, answerCollection, "content", 10000, true),
        databases.createStringAttribute(db, answerCollection, "authorId", 50, true),
        databases.createStringAttribute(db, answerCollection, "questionId", 50, true),
    ]);
    console.log("Answers Attributes created")
}