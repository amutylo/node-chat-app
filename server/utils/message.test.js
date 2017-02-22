var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate a correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    
    //store result in variable
    var message = generateMessage(from, text);

    //assert createdAt is a number
    expect(message.createdAt).toBeA('number')

    //assert from match
    expect(message).toInclude({
      from: from,
      text: text
    }); 
    //assert text match
  })
})