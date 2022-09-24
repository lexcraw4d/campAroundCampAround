const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User')

const bcrypt = require('bcrypt');
const LocalUser = require('../models/LocalUser');
const LocalStrategy = require('passport-local').Strategy
require('dotenv').config();

module.exports = 
{ 
  
googleStrat: (passport) => {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
       const newUser = {
        googleId: profile.id,
        displayName: profile.displayName,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        image: profile.photos[0].value
       }

       try {
            let user = await User.findOne({googleId: profile.id})
            if(user) {
                done(null, user)
                console.log(user)
            } else {
                user = await User.create(newUser)
                done(null, user)
            }
       }catch (err) {
            console.error(err)
       }
    }
    ))

    passport.serializeUser((user,done)=>{
        console.log("in serialize");
        done(null,user.id);
    });
    
    passport.deserializeUser((id,done)=>{
        console.log("deserialize");
        User.findById(id).then((user)=>{
            if(user){
                done(null,user);
            }
            else{
    
                User.findById(id).then((user)=>{
                    done(null,user);
                });
            }
        });
    })
},
localStrat : (passport) => {
        passport.use(
            new LocalStrategy({
                usernameField: 'email',
                passwordField: 'password'
            }, (email, password, done) => {
                //Match User
                LocalUser.findOne({
                    email: email,
                })
                .then(user => {
                    console.log('user',user)
                    if(!user){
                        return done(null, false, {message: 'That email is not registered'})
                    }
                    //Match password
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if(err) throw err;
                        if(isMatch){
                            return done(null, user)
                        } else {
                            return done(null, false, {message: 'Password incorrect'})
                        }
                    })
                })
                .catch(err => console.log(err))
            })
        )
        passport.serializeUser((user,done)=>{
            console.log("in serialize");
            done(null,user.id);
        });
        
        passport.deserializeUser((id,done)=>{
            // console.log("deserialize");
            User.findById(id).then((user)=>{
                if(user){
                    done(null,user);
                }
                else{
        
                    LocalUser.findById(id).then((user)=>{
                        done(null,user);
                    });
                }
            });
        })
    }
}
