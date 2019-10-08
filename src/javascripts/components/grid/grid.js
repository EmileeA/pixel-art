import utilities from '../../helpers/utilities';
import './grid.scss';

const makeGrid = () => {
  // for the grid we will make a table and user for loops to create
  let domString = '<table>';
  // we can't do ++ with the linter so += 1 is the same thing
  for (let r = 0; r < 26; r += 1) {
    domString += '<tr>';
    // imbetween the table row we add our columns
    for (let c = 0; c < 25; c += 1) {
      // these will be the actual pixels we are coloring
      // so I should have 25 of these td's
      domString += '<td></td>';
    }
    domString += '</tr>';
  }
  domString += '</table>';

  utilities.printToDom('grid', domString);
  // write a function called makeGrid in grid.js that does the double
};

export default { makeGrid };
