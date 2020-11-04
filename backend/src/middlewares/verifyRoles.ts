import IRequest from '../types'

export const IsAdmin = async (req: IRequest, res: Response) => {
  const user = await User.findById(req.userId)
  const roles = await Role.find({ _id: { $in: user.roles } })

  for (const role of roles) {
    if (role.name === 'admin') {
      next()
      return
    }
  }

  return res.status(403).json({ message: 'required admin role' })
}
