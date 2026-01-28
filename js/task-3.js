function getElementWidth(content, padding, border) {
    let contentWidth = parseFloat(content);
    let paddingWidth = parseFloat(padding);
    let borderWidth = parseFloat(border);
    return contentWidth + paddingWidth * 2 + borderWidth * 2
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200




function checkAge(age) {
  if (age === 20 || age === 30) {
    `You are an adult`
  }
  if (age === 10 || age === 17) {
    `undefined`
  }
  return age
}

checkAge(20)
checkAge(17)
checkAge(10)
checkAge(30)