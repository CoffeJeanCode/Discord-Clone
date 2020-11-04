import { app, server } from './app'
import './database'

const main = () => {
  server.listen(app.get('PORT'))
  console.log('Server on port', app.get('PORT'))
}

main()
