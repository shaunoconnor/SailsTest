/**
 * AboutController
 *
 * @module      :: Controller
 * @description :: A set of functions called `actions`.
 *
 */

var AboutController = {

  index: function(req, res){

    sails.log('I am AboutController');

    return res.view({
      things:[{name: 'people'}, {name:'location'}, {name:'blog'}, {name:'another'},{name: 'Twitter'}]
    });

  }
};

module.exports = AboutController;
