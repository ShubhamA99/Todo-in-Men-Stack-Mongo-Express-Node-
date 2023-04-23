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



exports.delete = (req,res) =>{
    console.log(req.query.id);
    axios.delete(`http://localhost:8080/deleteTodo/${req.query.id}`)
    .then(function(axiosResponse){
        console.log(axiosResponse);
        res.redirect("/")
    }).catch(err=>{
        res.send(err)
    })
    
   
}
exports.addTodo = (req,res)=>{
    res.render("addTodo")
}


