import { Router } from 'express'

const router = Router()

//import all functions from auth controller
import * as AuthCtrl from '../controllers/auth.controller'
import { verifyToken } from '../middlewares/verifyToken'

router.post('/signup', AuthCtrl.SignUp)
router.post('/signin', AuthCtrl.SignIn)
router.get('/user', verifyToken, AuthCtrl.userData)

export default router
