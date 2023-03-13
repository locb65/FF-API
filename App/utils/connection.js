//Connection to mongodb

import mongoose from mongoose


mongoose.connect('mongodb://localhost/Final-Fantasy-Characters', { useNewUrlParser: true })

export default mongoose