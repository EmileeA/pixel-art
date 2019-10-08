import $ from 'jquery';

const printToDom = (divId, toPrint) => {
  // below is where we put our css selector
  // we put a hashtag in front of the divId.
  // continued... Think of the $ sign like a function and you need to tell it what element you want out of the dom. So I need to pass a string with a hashtag
  $(`#${divId}`).html(toPrint);
};

export default { printToDom };
