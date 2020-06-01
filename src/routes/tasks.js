const {Router} = require('express');
const router = Router();
const tasks = require('./api.json');
const mysqlConnection = require('../config/dbConnection.js');

/*
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM task', (err, rows, fields) => {
      if(!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });  
  }); 
*/
  const _=require('underscore');
console.log(tasks)
router.get('/',(req, res)=>{
    res.json(tasks);
   
});

router.post('/',(req, res)=>{
    const {Name, Desciption, Create_Date} = req.body;
    if(title && director && year)
    {
        const id = task.length + 1;
        const newtask = {...req.body};
        console.log(newtask);
        task.push(newtask);
        res.json(task);
    }
    else{
        res.status(500).json({error: 'error de datos'});
    }
   
});
router.put('/:id',(req, res)=>{
    const {id} = req.params
    const {Name, Desciption, Create_Date} = req.body;
    if(Name && Description && Create_Date){
    _.each(task, (task, i) =>{
    if(task.id==id)
    {
        task.Name = Name;
        task.Description = Desciption;
        task.Create_Date = Create_Date;
    }
    });
    res.json(task);
    }
    else{

        res.status(500).json({error: 'error de datos'});  
    }
});
router.delete('/:id',(req, res)=>{
    const {id} = req.params
    _.each(task, (task, i) =>{
        if(task.id == id){
            task.splice(i,1);
        }

    });
    res.send(task);
});

module.exports = router;