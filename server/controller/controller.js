
var Tododb = require('../model/model')


exports.create =(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Content Not Reached Till Controller"})
    }

   const dateGot = new Date(req.body.ToBeCompletedTill).toISOString().substring(0, 10);
    const Todo = new Tododb({
        description :req.body.description,
        ToBeCompletedTill:dateGot
    })
    console.log(Todo);

    Todo.save(Todo).then(data=>{
        
        res.redirect("/")
    }).catch(err=>{
        res.status(500).send({
            message:err.message||"Not able to persist data"
        })
    })
}




exports.getAll=(req,res)=>{
    
    Tododb.find().then(user =>{
        res.send(user)
    }).catch(err=>{
        res.status(500).send({
            message:err.message||"Cant Fetch data"
        })
    })

}



exports.getById=(req,res)=>{
    if(!req.body){
        res.status(400)
        .send({message:"check first if"})
    }

    const id = req.query.id
    console.log(id);
    Tododb.findById(id)
    .then(data=>{
        res.send(data)
    }).catch(err=>{
        res.status(400).
        send({message:err.message})
    })
}

exports.update =(req,res)=>{
    if(!req.body){
        res.status(400)
        .send({message:"Lokk in first if"})
        
    }

    const id = req.params['id']
  
    Tododb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if (!data){
            res.status(400)
            .send({message:`Cannot Update Data ${id}`})
        }else{
            console.log("inside update cont");
            console.log(data);
            res.send(data)
        }
    }).catch(err=>{
        res.status(500)
        .send({message:err.message})
    })
}


exports.delete =(req,res)=>{
    if(!req.body){
        res.status(400)
        .send({message:"Lokk in first if"})
        
    }

    const id =req.params['id']
    
    Tododb.findByIdAndDelete(id)
    .then(data=>{
        if (!data){
            res.status(400)
            .send({message:`Cannot Update Data ${id}`})
        }else{
            
          console.log(data);
            res.send(data)
        }
    }).catch(err=>{
        res.status(500)
        .send({message:err.message})
    })

    
}




