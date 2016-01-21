describe("typeChecker",function(){
  it("Will return false if not given a number",function(){
    expect(typeChecker("bull", 3)).to.equal(false);
  });

  it("Will return false if iterator is greater than max", function(){
    expect(typeChecker(19,4)).to.equal(false);
  });
});

describe("numberOfLoops",function(){
  it("Will return a whole number of loops to be executed",function(){
    expect(numberOfLoops(3, 9)).to.equal(3);
  });
});


describe("countBy", function(){
  it("Will return a string of integers that will count from the iterative to the max", function(){
    expect(countBy(5, 30)).to.equal("5, 10, 15, 20, 25, 30")
  })
})
