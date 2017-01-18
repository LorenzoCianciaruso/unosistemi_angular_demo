'use strict';

describe('myApp.validation module', function() {

  describe('when I call the validate function with null user', function(){
    beforeEach(module('myApp.validation'));
    it('should fail', inject(function(validator){
      expect( validator.validate(null) ).toEqual(false);
    }))
  });

  describe('when I call the validate function with empty user', function(){
    beforeEach(module('myApp.validation'));
    it('should fail', inject(function(validator){
      expect( validator.validate({}) ).toEqual(false);
    }))
  });

  describe('when I call the validate function with partial empty user', function(){
    beforeEach(module('myApp.validation'));
    it('should fail', inject(function(validator){
      expect( validator.validate({name:'Lorenzo'}) ).toEqual(false);
    }))
  });

  describe('when I call the validate function with partial empty user', function(){
    beforeEach(module('myApp.validation'));
    it('should fail', inject(function(validator){
      expect( validator.validate({surname:'Cianciaruso'}) ).toEqual(false);
    }))
  });

  describe('when I call the validate function with partial empty user', function(){
    beforeEach(module('myApp.validation'));
    it('should fail', inject(function(validator){
      expect( validator.validate({year:1990}) ).toEqual(false);
    }))
  });

  describe('when I call the validate function with wrong year data type', function(){
    beforeEach(module('myApp.validation'));
    it('should fail', inject(function(validator){
      expect( validator.validate({name: 'Lorenzo', surname: 'Cianciaruso', year:'Hello'}) ).toEqual(false);
    }))
  });

  describe('when I call the validate function with wrong name', function(){
    beforeEach(module('myApp.validation'));
    it('should fail', inject(function(validator){
      expect( validator.validate({name: 'L', surname: 'Cianciaruso', year:1990}) ).toEqual(false);
    }))
  });

  describe('when I call the validate function with wrong surname', function(){
    beforeEach(module('myApp.validation'));
    it('should fail', inject(function(validator){
      expect( validator.validate({name: 'Lorenzo', surname: 'C', year:1990}) ).toEqual(false);
    }))
  });

  describe('when I call the validate function with good data', function(){
    beforeEach(module('myApp.validation'));
    it('should succeed', inject(function(validator){
      expect( validator.validate({name: 'Lorenzo', surname: 'Cianciaruso', year:1990}) ).toEqual(true);
    }))
  });
});
