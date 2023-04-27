//obj instance of class(on ram)
//doc on database
//mongodb 6th nf dknf(domain(security constraint), key(primary, foreign) constraint)
//obj mapped using mongoose (adherence of schema) to model to database
//Buffer to store Images on database(directly saved on db)
//indexing reduces search time for hashing constt and bst logn
//1 -> ascending
//array of schema -> schema inheritance
//_id = m.S.T.Oid auto added in schema
//cross referncing of schemas
//ref: refernece to some model
//sir's lecture on youtube+github
// Author model => authors collection(made auto)

//insertion methods
//model.create
//modelObj.save
//insertmany

//searching
//find
//findOne
//findById(pass id)

//regex
// /dev/i search dev case insensitively

//sort({created:-1})

//Data (objects) will be in model/document and mongoose will connect and add these documents into the collections through the mongo db connector

//searching/update
//first search then update
//.findById then .save

//search and update
//.findByIdandUpdate
//.findOneandUpdate
//.save not required

//deleting
//deleteOne
//deleteMany

//Db.close()

//For SQL based
// require('mysql')
// require('oracle')
//query different

//variable manipulation front frontend

//updated version 0.0.0.0

const mongoose = require("mongoose");

mongoose.connect("");
function a() {
  if (err) throw err;
  console.log("Successful Connection");
}
