const axios = require('axios')

exports.homeRoute = (req,res) =>{
   
    axios.get('http://localhost:8080/get')
    .then(function(axiosResponse){
        
        res.render('index',{ToDoList:axiosResponse.data}); 
    })
    .catch(err=>{
        res.send(err)
    })
    
   
}

exports.update = (req,res) =>{

    axios.get("http://localhost:8080/getTodo?",{params:{id:req.query.id}})
    .then(function(axiosResponse){
        console.log(axiosResponse.data);
        res.render("update",{Details:axiosResponse.data})
    }).catch(err=>{
        res.send(err)
    })
    
   
}

exports.addTodo = (req,res)=>{
    res.render("addTodo")
}


