var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
var mongoose = require('mongoose');

module.exports = function() {

    var Usuario = mongoose.model('Usuario');

    passport.use(new GitHubStrategy({
        clientID: '17d9a223d631cceb0c80',
        clientSecret: 'b3834abbf5f0878228e7a29de986645b2a5a8938',
        callbackURL: 'https://dswa5-10-ac-pt3009173.herokuapp.com/auth/github/callback'
        }, function(accessToken, refreshToken, profile, done) {
                Usuario.findOrCreate(
                    { "login" : profile.username},
                    { "nome" : profile.username},
                    function(erro, usuario){
                        if(erro){
                            console.log(erro);
                            return done(erro);
                        }
                        return done(null, usuario);
                    }
                )
        }));

    passport.serializeUser(function(usuario, done) {
        done(null, usuario._id);
    });

    passport.deserializeUser(function(id, done) {
        Usuario.findById(id).exec()
        .then(function(usuario) {
                done(null, usuario);
            });
        });
};