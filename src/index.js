import app from './app.js'
import {PORT} from './config.js'

/* listen al port 3000 */
app.listen(PORT) 
console.log('Server running on port ', PORT)