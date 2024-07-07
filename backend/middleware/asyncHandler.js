const asyncHanlder=fn=>(req,res,next)=>{
    Promise.resolve(fn(req,res,next)).catch(next)
}

export default asyncHanlder