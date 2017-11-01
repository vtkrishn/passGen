'use strict';

var expect = require('chai').expect;
var helper = require('../index');

      describe('#passgenerator', function() {
          //test pass gen function
          it('should return password', function() {
              var result = $(2,6);
              expect(result).to.have.lengthOf(2);;
          });
      });

