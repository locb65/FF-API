// Connection to mongodb
import mongoose from "mongoose"

mongoose.connect('mongodb://localhost/Final-Fantasy-Characters', {  useNewUrlParser: true, useUnifiedTopology: true, });

export default mongoose
