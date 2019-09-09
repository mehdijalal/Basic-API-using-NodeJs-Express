var express = require('express');

/* GET home page. */
// router.get('/student', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
function routes(){
    const studentRouter = express.Router();
    studentRouter.route('/students')
        .post((req,res)=>{
            console.log(req.body);
            return res.status(201).json(req.body);
        })
        .get((req,res)=>{
            const oMod ={
            Name:"James Hog",
            Phone:"3333222211",
            Email:"james@gmail.com"
            }
            const response = {hello:'This is my test api'};
           return res.json(oMod);
        });

    // studentRouter.route('/students/:studentId')
    //     .get((req,res)=>{
    //         var studentid = req.params.studentId;
    //         console.log(req.params);
    //         return res.json(req.params);
    //     });
    return studentRouter;
}

module.exports = routes;
