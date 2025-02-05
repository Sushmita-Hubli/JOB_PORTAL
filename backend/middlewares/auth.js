import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncErrors.js"
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new ErrorHandler("User is not authenticated.", 400));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = await User.findById(decoded.id);
        next();
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            return next(new ErrorHandler("Session expired, please log in again.", 401));
        }
        return next(new ErrorHandler("Invalid token, authentication failed.", 400));
    }
});

export const isAuthorized=(...roles)=>{
return(req,res,next)=>{
    if(!roles.includes(req.user.role)){
        return next(new ErrorHandler(`${req.user.role} not allowed to access this resource.`));


    }
    next();
    

    
}
}