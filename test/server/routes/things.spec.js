var app = require('../../../app');
var expect = require('chai').expect;
var db = require('../../../config/db');
var Thing = require('../../../models/thing');
var agent = require('supertest-as-promised').agent(app);

describe('api for things', function(){
  beforeEach(function(done){
    db.seed()
      .then(function(){
        done();
      });
  });

  describe('/api/things', function(){
    it('returns 200', function(){
      return agent
        .get('/api/things')
          .expect(200)
          .expect(function(resp){
            expect(resp.body.length).to.eq(3);
          });
    
    });
  });

});
