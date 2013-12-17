/**
 * UserController
 *
 * @module      :: Controller
 * @description :: A set of functions called `actions`.
 *
 */

var UserController = {

  create: function (req, res){

    User.create({
      name: req.param('name'),
      email: req.param('email')
    })

    .exec(function userCreated(err, newUser){

      if (err) return res.serverError(err);

      // sails.log('New user created successfully!');

      return res.json(newUser);
    });

  }
  // _config: {}
};

module.exports = UserController;
