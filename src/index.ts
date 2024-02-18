// boiler plate 

import app from "./app"

const port = process.env.PORT || 3000

app.listen(port, () => {
    // might need to catch an error here

  return console.log(`server is listening on http://localhost:${port}`)
})