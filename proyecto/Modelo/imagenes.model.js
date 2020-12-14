// var MongoDB = require('../database/database');
// //var ObjectID = require('mongodb').ObjectID;

// class ProductsModel{
//     constructor(){
//         this.collection = null;

//         MongoDB.getDb()
//         .then (
//             (db)=>{
//                 this.collection = db.collection("imagenes");
//             }

//             //const db = await MongoDB.getDb();
//             //collection = db.collection("imagenes");
//         )
//         .catch((ex)=>{
//             console.log(ex);
//             throw(ex);
//         })
//     }

//     async getAll(){
//         try{
//             rslt = await this.collection.find().toArray();
//             return rslt;

//         }catch(ex){
//             console.log(ex);
//             throw ex;
//         }

//     }

//     async addOne( document ){
//         try{
//             var result = await this.collection.insertOne(document); 
//         }catch (ex){
//             throw (ex);
//         }
//     }

    
// }
// module.exports = ProductsModel;
