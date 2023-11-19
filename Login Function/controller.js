const { ObjectID } = require("bson");
var UserSchema = require("../Login Function/Model").usermodel;
var CommonFunc = require("../Common Function/commonfunction");


/* For Login */
async function userLogin(data){
    try {
        var matchUser = await UserSchema.findOne({
           email: data.email
        },{createdOn: 0, __v: 0})
        if(matchUser){
    
        let decryptPass = await CommonFunc.decryptPassword(data.password, matchUser.password);
        if(decryptPass == false){
            return {
                status: 202,
                message: "Password is Incorrect, or unmatched",
                data: {}
            }
        }

        let genToken = CommonFunc.generateToken({id: matchUser._id});
        await UserSchema.updateOne({_id: matchUser._id}, {
            $set: {
                acc_token: genToken
            }
        });
        return {
            status: 200,
            message: "Login successfully",
            data: {
                userId: matchUser._id,
                first_name: matchUser.first_name,
                last_name: matchUser.last_name,
                email: matchUser.email,
                role: matchUser.role,
                acc_token: genToken,
                senderid: matchUser.senderid
            }
        }
    }
    return {
        status: 404,
        message: "User not found, Either Email or password is incorrect",
        data: {matchUser}
    }
} catch (error) {
    console.log(error);
    throw error
}
}

async function fetchProfile(data){
try {
    var matchUser = await UserSchema.findOne({
    email: data.email });
    if(matchUser){
        return{
            status: 200,
            message: "fetch Successfully",
            data: {matchUser}
        }
    }
} catch (error) {
    console.log(error);
}
}

async function UpdateProfile(data){
    try {
        var UpdateProf = await UserSchema.updateOne({
            email: data.email
        }, {
            $set: {
                first_name: data.first_name,
                last_name: data.last_name,
                profile_pic: data.profile_pic,
                gender: data.gender,
                course: data.course,
                profileImage: data.file,
                company_name: data.company_name
            }
        })
console.log(UpdateProf);
        if(UpdateProf){
            return{
                status: 200
            }
        }
    } catch (error) {
        console.log(error);
        return {
            status: 500, 
            message: "Internal Server Error"
        };
    }

}
module.exports = { userLogin, fetchProfile, UpdateProfile }
