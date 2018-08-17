const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

// Define Schemes
const userSchema = new mongoose.Schema({
  id: { type: String, required: true, index: { unique: true } },
  name: { type: String, required: true },
  password : { type: String, required: true, bcrypt: true },
  email: { type: String, required: true }
},
{
  timestamps: true
});

userSchema.methods.comparePassword = function(inputPassword, cb) {
  // if (inputPassword === this.password) {
  //   cb(null, true);
  // } else {
  //   cb('error');
  // }
  var user = this;
  if(bcrypt.compareSync(inputPassword, user.password)){
    cb(null, true)
  } else {
    cb('error');
  }
}

userSchema.pre('save', function(next){
     var user = this;
      if(!user.isModified('password')){
        return next(); //다음 단계인 save실행
      } else {
        user.password = bcrypt.hashSync(user.password); //password를 hash값으로 바꿈
        return next();
      }
});

// Create new todo document
userSchema.statics.create = function (payload) {
  // this === Model
    const user = new this(payload);
   // var User = mongoose.model('User', userSchema);
   // var user = new User(payload);

    return user.save();
  //Schema.pre를 함수는 첫번째 파라미터가 실행되기 전에, 먼저 callback함수가 실행됨.
  // return userSchema.pre("save", function(next){
  //   const user = new this(payload);
  //   if(!user.isModified("password")){
  //     return next(); //다음 단계인 save실행
  //   } else {
  //     user.password = bcrypt.hashSync(user.password); //password를 hash값으로 바꿈
  //     return next();
  //   }
  // })
};

// Find All
userSchema.statics.findAll = function () {
  // return promise
  // V4부터 exec() 필요없음
  return this.find({});
};

// Find One by todoid
userSchema.statics.findOneByTodoid = function (todoid) {
  return this.findOne({ todoid });
};

// Update by todoid
userSchema.statics.updateByTodoid = function (todoid, payload) {
  // { new: true }: return the modified document rather than the original. defaults to false
  return this.findOneAndUpdate({ todoid }, payload, { new: true });
};

// Delete by todoid
userSchema.statics.deleteByTodoid = function (todoid) {
  return this.remove({ todoid });
};

// Create Model & Export
module.exports = mongoose.model('User', userSchema);
