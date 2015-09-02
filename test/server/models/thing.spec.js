var db = require('../../../config/db');
var expect = require('chai').expect;
var Thing = require('../../../models/thing');

describe('Thing', function(){
  beforeEach(function(done){
    db.seed()
      .then(function(){
        done();
      });
  });

  describe('rock', function(){
    var rock;
    beforeEach(function(done){
      Thing.findOne({name: 'Rock' })
        .then(function(_rock){
          rock = _rock; 
          done();
        });
    
    });
    it('rock has a name of rock', function(){
      expect(rock.name).to.equal('Rock');
    });
  });

  describe('paper', function(){
    var paper;
    beforeEach(function(done){
      Thing.findOne({name: 'Paper' })
        .then(function(_paper){
          paper = _paper; 
          done();
        });
    
    });
    it('paper has a name of paper', function(){
      expect(paper.name).to.equal('Paper');
    });
  });


});
