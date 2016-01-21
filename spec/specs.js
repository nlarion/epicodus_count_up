describe("typeChecker",function(){
  it("Will return false if not given a number",function(){
    expect(typeChecker("bull", 3)).to.equal(false);
  });

  it("Will return false if iterative is greater than max", function(){
    expect(typeChecker(19,4)).to.equal(false);
  });
});

describe("numberOfLoops",function(){
  it("Will return a whole number of loops to be executed",function(){
    expect(numberOfLoops(3, 9)).to.equal(3);
  });
});
