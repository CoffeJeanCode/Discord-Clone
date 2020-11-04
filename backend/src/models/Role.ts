import { Schema, model } from 'mongoose'

const roleSchema = new Schema(
  {
    name: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
)

export default model('Role', roleSchema)
