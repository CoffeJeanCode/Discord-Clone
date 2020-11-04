import Role from '../models/Role'

export const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount()
    //if roles are more than 0 means that they are created
    if (count > 0) return

    //if roles are not created create roles
    const values = await Promise.all([
      new Role({ name: 'admin' }).save(),
      new Role({ name: 'user' }).save(),
    ])
    console.log(values)
  } catch (err) {
    //log the error if something went wrong
    console.error(err)
  }
}
