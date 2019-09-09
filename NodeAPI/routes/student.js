var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/student', function(req, res, next) {
 
    const stdModel = {
        StudentId:1,
        StudentName:"Matthew",
        StudentPhone:"3232323"
    }
    return res.json(stdModel);
})
.post('/student',function(req,res,next){
    console.log(req.body);
    return res.json(req.body);
})
.get('/student/:studentId',function(req,res,next){
    var studentid = req.params.studentId;
    console.log('You got here');
    console.log(req.params);
    return res.json(studentid);
})
.put('/student/:studentId',function(req,res,next){
    var studentid = req.params.studentId;
    //Book.findById(req.params.bookId, (err,book)=>if(err){return res.send(err)}
    //book.title = req.body.title;
    //book.author = req.body.author
    //book.save();
    //return res.json(book));
    console.log('put is called');
    console.log(studentid);
    res.json(req.body);
})
.patch('/student/:studentId',function(req,res,next){
    var studentid = req.params.studentId;
    //Book.findById(req.params.bookId, (err,book)=>if(err){return res.send(err)}
    //book.title = req.body.title;
    //book.author = req.body.author
    //book.save();
    //return res.json(book));
    //-------------------for patch-----------//
    //---Here we delete it because we don't want the id which is primarykey to be send as part of the update---//
    if(req.body.studentId){
        delete req.body.studentId;
    }
    const stdModel ={};
    Object.entries(req.body).forEach((item)=>{
        const key = item[0];
        const value = item[1];
        stdModel[key] = value;
    })
    //---we do implement update to db here-----//
    console.log('patch is called');
    console.log(studentid);
    console.log(stdModel);
    res.json(req.body);
})
.delete('/student/:studentId',function(req,res,next){
    var studentid = req.params.studentId;
    //Book.findById(req.params.bookId, (err,book)=>if(err){return res.send(err)}
    //req.book.remove();
    //return res.json(book));
    console.log('delete is called');
    console.log(studentid);
    return res.sendStatus(204);
})


module.exports = router;
