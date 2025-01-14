import { db } from "../name"
import { databases } from "./config"
import createVoteCollection from "./vote.collection"
import { createQuestionCollection } from "./question.collection"
import { createAnswerCollection } from "./answers.collection"
import { createCommentsCollection } from "./comments.collection"

export default async function getOrCreateDB(){
    try {
      await databases.get(db)
      console.log("Database connection")
    } catch (error) {
      try {
        await databases.create(db, db)
        console.log("database created")
        await Promise.all([
          createQuestionCollection(),
          createAnswerCollection(),
          createCommentsCollection(),
          createVoteCollection(),
  
        ])
        console.log("Collection created")
        console.log("Database connected")
      } catch (error) {
        console.log("Error creating databases or collection", error)
      }
    }
  
    return databases
  }