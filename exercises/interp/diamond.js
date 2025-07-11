const STAR = '*';
const SPACE = ' ';

function upperDiamond(n) {
  let spaceCount = (n - 1) / 2;
  let diamondRows = [];

  for (let starCount = 1; starCount < n; starCount += 2) {
    let stars = STAR.repeat(starCount);
    let spaces = SPACE.repeat(spaceCount);
    let row = `${spaces}${stars}${spaces}`;

    diamondRows.push(row);
    spaceCount -= 1;
  }

  return diamondRows;
}

function lowerDiamond(n) {
  return upperDiamond(n).reverse();
}

function diamond(n) {
  const upper = upperDiamond(n);
  const middle = STAR.repeat(n);
  const lower = lowerDiamond(n);

  console.log(upper.join('\n'));
  console.log(middle);
  console.log(lower.join('\n'));
}

diamond(1);
// logs
// *

diamond(3);
// // logs
//  * 1 space, 1 star, 1 space
// *** 0 spaces, 3 stars, 0 spaces
//  * 1 space, 1 star, 1 space
//  * 

diamond(5);

//   *  
//  *** 
// *****
//  *** 
//   *

diamond(9);
// // logs
//     * 1, 
//    *** 3 3 3
//   ***** 2 5 2
//  ******* 1 7 1
// ********* 9
//  *******
//   *****
//    ***
//     *