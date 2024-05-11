import express from 'express'
import userContoller from '../Controllers/usercontroller.min.js'
import auth from '../Middleware/auth.min.js'
// import auth from '../Middleware/auth.min.js'
const userrouter = express.Router()
userrouter.get('/home', userContoller.homePage)
userrouter.post('/signup', userContoller.signup)
userrouter.post('/login', userContoller.signin)
userrouter.post('/getUserInfo',  userContoller.getUser)
userrouter.post('/forgotpassword', userContoller.forgotPassword)
userrouter.post('/resetpassword/:userId/:token', userContoller.resetPassword)

userrouter.post('/posttaskurls/:utaskId/:userId', userContoller.posttaskurls)
userrouter.post('/gettask/:userId', userContoller.getTaskUrls)
userrouter.post('/commentscore/:utaskId', userContoller.postcommentscore)
userrouter.post('/createtask', userContoller.createTask)


export default userrouter