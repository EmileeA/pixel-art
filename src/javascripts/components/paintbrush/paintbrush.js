import utilities from '../../helpers/utilities';

const colors = ['pink', 'darkorchid', 'papayawhip', 'blanchedalmond', 'tomato', 'cornsilk'];

// create a function
const printColorPicker = () => {
  let domString = '';

  // need to loop over color
  for (let i = 0; i < colors.length; i += 1) {
  // [i] because I just want the string out of it
    const color = colors[i];
    domString += `
  <div class="form-check form-check-inline">
    <input class="form-check-input color-choice" type="radio" id="${color}inlineCheckbox1" value="${color}" name="colorradio">
    <label class="form-check-label" for="${color}inlineCheckbox1">${color}</label>
</div>
`;
    utilities.printToDom('color-picker', domString);
    //
  }
};


export default { printColorPicker };
