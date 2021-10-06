const get=(req,res)=>{
    time=new Date().toTimeString();
    console.log("Incoming GET Webhook",time);
    console.dir(req.body, { depth: null });
    res.send("ok mone");
}

const post=(req,res)=>{
    time=new Date().toTimeString();
    console.log("Incoming POST Webhook",time);
    console.dir(req.body, { depth: null });
    res.send("ok mone");
}

module.exports={
    get,
    post
}