function tag(strings, ...values) {
  let msg = "";
  strings.forEach((string, index) => {
    msg += string;
    if (index < values.length) {
      msg += `<b>${values[index]}</b>`;
    }
  });
  console.log(strings);
  console.log(values);
  return msg;
}
const name = "Bob";
const age = 10;
const msg = tag`My name is ${name}. and my age is ${age}`;
console.log(msg);
