const jwt = require("jsonwebtoken");


function authUser(req,res,next) {
    const authHead = req.headers.authorization;
    if(!authHead || !authHead.startsWith('Bearer ')){
        return res.json("Token not provided");
    }

    const token = authHead.split(' ')[1];

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        if(decoded){
            req.userId = decoded.userId
            next();
        }else{
            return res.json("Invlaid token");
        }
    }catch(err){
        console.log(err);
        return res.json("somthing is wrong with our server, try again after some times")
    }
}

module.exports = authUser