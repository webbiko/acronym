const mongoose = require("mongoose");
const mongoosePagination = require("mongoose-paginate-v2");
const mongooseRandom = require("mongoose-simple-random");

var Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0) {
  mongoose.connect(require("./connection-string"), { useUnifiedTopology: true, useNewUrlParser: true });
}

var newSchema = new Schema(
  {
    acronym: { type: String, required: true },
    definition: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, select: false },
    updatedAt: { type: Date, default: Date.now, select: false }
  }
);

newSchema.set('toJSON', {
    virtuals: false,
    transform: function(doc, ret) {
        delete ret._id;
        delete ret.__v;
    }
});

newSchema.plugin(mongoosePagination);
newSchema.plugin(mongooseRandom);
newSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

newSchema.pre("update", function () {
  this.update({}, { $set: { updatedAt: Date.now() } });
});

newSchema.pre("findOneAndUpdate", function () {
  this.update({}, { $set: { updatedAt: Date.now() } });
});

module.exports = mongoose.model("acronym", newSchema);