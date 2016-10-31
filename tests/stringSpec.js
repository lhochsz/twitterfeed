// npm install --sav-dev chai
const chai=require('chai');
const should=chai.should();
const expect=chai.expect;
const assert = chai.assert

describe('String test',function(){
  it('the string hello should be hello', function(){
    const hello= 'hello';

    hello.should.be.equal('hello');
  });
  it('typeof string should be string', function(){
    const str='qwfp';

    str.should.be.a('string');
    // expect(str).to.be.a('string');
    // assert.typeof(str, 'string');
  })
});
