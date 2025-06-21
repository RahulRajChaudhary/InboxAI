import { db } from "./server/db";


await db.user.create({
  data :{
    emailAddress: "3oJ8T@example.com",
    firstName: "Rahul",
    lastName: "Raj"
  }
});