import User from '../models/User'
import { encryptPassword, comparePassword } from '../helpers/passwords'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import Role from '../models/Role'
import IRequest from '../types'

export const SignIn = async (req: Request, res: Response) => {
  const userFound = await User.findOne({ email: req.body.email }).populate(
    'roles'
  )

  if (!userFound) return res.status(404).json({ message: 'user not found' })
  const matchPassword = await comparePassword(
    req.body.password,
    userFound.password
  )

  if (!matchPassword)
    return res.status(404).json({ message: 'invalid password' })

  const token = jwt.sign({ id: userFound._id }, process.env.SECRET || '', {
    expiresIn: 172800,
  })

  res.status(200).json(token)
}

export const SignUp = async (req: Request, res: Response) => {
  const { username, email, password, roles } = req.body

  const user = new User({
    username,
    email,
    password: await encryptPassword(password),
  })

  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } })
    user.roles = foundRoles.map((role) => role._id)
  } else {
    const role = await Role.findOne({ name: 'user' })
    if (!role)
      return res
        .status(500)
        .json({ message: 'user role not found server error' })
    user.roles = [role._id]
  }

  const savedUser = await user.save()

  const token = jwt.sign({ id: savedUser._id }, process.env.SECRET || '', {
    expiresIn: 172800,
  })

  return res.status(200).json(token)
}

export const userData = async (req: IRequest, res: Response) => {
  const user = await User.findById(req.userId, { password: 0 })
  if (!user) return res.status(404).json({ message: 'user not found' })

  return res.status(200).json(user)
}
