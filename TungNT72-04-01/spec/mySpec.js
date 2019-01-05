describe("Power Integers : ", function() {
    it("9 output : true as 3^2", function() {
      expect(true + ` as 3^2 = 9`).toEqual(powInteger(9));
    });
  
    it("1 output : 1^b = 1", function() {
        expect(true + "1^b = 1").toEqual(powInteger(1));
    });

    it("10 output : false", function() {
        expect(false).toEqual(powInteger(10));
    });

    it("81 output : true as 3^4", function() {
        expect(true + ` as 3^4 = 81`).toEqual(powInteger(81));
    });

    it("1024 output : true as 2^10", function() {
        expect(true + ` as 2^10 = 1024`).toEqual(powInteger(1024));
    });
});

describe("Prime Integers : ", function() {
    it("10 output [2,3,5,7]", function() {
      expect([2,3,5,7]).toEqual(findPrime(10));
    });
  
    it("20 output [2,3,5,7,11,13,17,19]", function() {
        expect([2,3,5,7,11,13,17,19]).toEqual(findPrime(20));
    });

    it("3 output [2,3]", function() {
        expect([2,3]).toEqual(findPrime(3));
    });

    it("2 output [2]", function() {
        expect([2]).toEqual(findPrime(2));
    });
});
  