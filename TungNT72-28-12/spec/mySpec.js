describe("Largest Number : ", function() {
  it("[3,30,34,5,9] se thanh 9534330", function() {
    expect(9534330).toBe(tung([3, 30, 34, 5, 9]));
  });

  it("[9,99,98,998,9997] se thanh 999999799898", function() {
    expect(999999799898).toBe(tung([9, 99, 98, 998, 9997]));
  });

  it("[6,27,38,624,34] se thanh 6624383427", function() {
    expect(6624383427).toBe(tung([6, 27, 38, 624, 34]));
  });

  it("[2,43,466,335,878,235] se thanh 878466433352352", function() {
    expect(878466433352352).toBe(tung([2, 43, 466, 335, 878, 235]));
  });

  it("[1,5,8,3,64,9] se thanh 9864531", function() {
    expect(9864531).toBe(tung([1, 5, 8, 3, 64, 9]));
  });
});

describe("Merge Sort : ", function() {
  it("[3,30,34,5,9] se thanh [3,5,9,30,34]", function() {
    expect([3, 5, 9, 30, 34]).toEqual(mergeSort([3, 30, 34, 5, 9]));
  });

  it("[9,15,9,34,7,64] se thanh [7,9,9,15,34,64]", function() {
    expect([7, 9, 9, 15, 34, 64]).toEqual(mergeSort([9, 15, 9, 34, 7, 64]));
  });

  it("[2,1,1,1,1,1,2] se thanh [1,1,1,1,1,2,2]", function() {
    expect([1, 1, 1, 1, 1, 2, 2]).toEqual(mergeSort([2, 1, 1, 1, 1, 1, 2]));
  });
});

describe("Quick Sort : ", function() {
  it("[3,30,34,5,9] se thanh [3,5,9,30,34]", function() {
    expect([3, 5, 9, 30, 34]).toEqual(quickSort([3, 30, 34, 5, 9], 0, 4));
  });

  it("[9,15,9,34,7,64] se thanh [7,9,9,15,34,64]", function() {
    expect([7, 9, 9, 15, 34, 64]).toEqual(
      quickSort([9, 15, 9, 34, 7, 64], 0, 5)
    );
  });

  it("[2,1,1,1,1,1,2] se thanh [1,1,1,1,1,2,2]", function() {
    expect([1, 1, 1, 1, 1, 2, 2]).toEqual(
      quickSort([2, 1, 1, 1, 1, 1, 2], 0, 6)
    );
  });
});

describe("Hotel book room : ", function() {
  it("Den[1,3,5] va Di[2,6,8] ,K = 1 se thanh false", function() {
    expect(false).toEqual(checkRoomPossible([1, 3, 5], [2, 6, 8], 1));
  });

  it("Den[1,3,5] va Di[2,6,8] ,K = 2 se thanh true", function() {
    expect(true).toEqual(checkRoomPossible([1, 3, 5], [2, 6, 8], 2));
  });

  it("Den[1,3,5,9] va Di[2,6,8,10] ,K = 2 se thanh true", function() {
    expect(true).toEqual(checkRoomPossible([1, 3, 5, 9], [2, 6, 8, 10], 2));
  });

  it("Den[1,2,5,9] va Di[6,4,6,10] ,K = 2 se thanh true", function() {
    expect(true).toEqual(checkRoomPossible([1, 2, 5, 9], [6, 4, 6, 10], 2));
  });
});

describe("Xoay matran : ", function() {
  it("[[1,2,3],[4,5,6],[7,8,9]] se la [[7,4,1],[8,5,2],[9,6,3]]", function() {
    expect([[7, 4, 1], [8, 5, 2], [9, 6, 3]]).toEqual(
      xoay([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
    );
  });

  it("[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]] se la [ [ 13, 9, 5, 1 ],[ 14, 10, 6, 2 ],[ 15, 11, 7, 3 ],[ 16, 12, 8, 4 ] ]", function() {
    expect([
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4]
    ]).toEqual(
      xoay([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])
    );
  });
});

describe("Marrix Zero : ", function() {
  it("[[1,0,1],[1,1,1],[1,1,1]] se la [[0,0,0],[1,0,1],[1,0,1]]", function() {
    expect([[0, 0, 0], [1, 0, 1], [1, 0, 1]]).toEqual(
      maxtrixZero([[1, 0, 1], [1, 1, 1], [1, 1, 1]])
    );
  });

  it("[[1,1,1],[1,0,1],[1,1,1]] se la [[1,0,1],[0,0,0],[1,0,1]]", function() {
    expect([[1, 0, 1], [0, 0, 0], [1, 0, 1]]).toEqual(
      maxtrixZero([[1, 1, 1], [1, 0, 1], [1, 1, 1]])
    );
  });
});
