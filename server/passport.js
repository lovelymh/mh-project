const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('./models/user');

passport.serializeUser((user, done) => { //Strategy 성공시 호출됨
  done(null, user._id); //user._id가 deserializeUser의 첫 번째 매개변수로 이동, 여기의 user._id가 req.session.passport.user에 저장
});

passport.deserializeUser((id, done) => { //매개변수 user는 serializeUser의 done의 인자 user._id를 받은 것. 매개변수 id는 req.session.passport.user에 저장된 값
  Users.findById(id, (err, user) => {
      done(null, user); //여기의 user가 req.user가 된다
  })
});

//done(DB조회에러시 넣는 서버 에러, 성공시 return값, 서버에러는 아니지만 다른 임의 실패 에러를 만들고 싶을때)
passport.use(new LocalStrategy({ //local전략을 세움
  usernameField: 'id',
  passwordField: 'password',
  session: true, //세션 저장 여부
  passReqToCallback: false
}, (id, password, done) => {
  Users.findOne({id: id}, (findError, user) => {
    if (findError) return done(findError); // 서버 에러 처리
    if (!user) return done(null, false, { message: '존재하지 않는 아이디입니다' }); // 임의 에러 처리
    return user.comparePassword(password, (passError, isMatch) => {
      if (isMatch) {
        return done(null, user); //검증 성공
      }
      return done(null, false, { message: '비밀번호가 틀렸습니다' });
    })
  })
}))

module.exports = passport;
