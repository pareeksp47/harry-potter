import 'regenerator-runtime/runtime'

import app from './server'

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  const port = server.address().port
  console.log('Server listening on port ' + port + '...')
})
