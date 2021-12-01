//select all HTML elements

const body = document.querySelector("#body");
const colorForm = document.querySelector("#add_color");
const colorPickerContiner = document.querySelector("#color_picker");

//Select form content and add a paragraph indicating the degree and colors.
const changeEvent = (e) => {
  const color_1 = e.target.form[1].value;
  const degree_1 = e.target.form[0].value;
  const color_2 = e.target.form[2].value;
  const paragraph = document.createElement("p");
  const parText = document.createTextNode(
    `Gradient has an angle of ${degree_1} and first color of ${color_1}. The second color of the gradient is ${color_2}.`
  );

  //If tagName is #color_picker elements have a tagName of H2 OR P.
  switch (colorPickerContiner.lastElementChild.tagName) {
    case "H2":
      paragraph.appendChild(parText);
      const appendParagraph = colorPickerContiner.appendChild(paragraph);
      console.log(colorPickerContiner);
      break;

    case "P":
      colorPickerContiner.lastElementChild.innerText = `Gradient has an angle of ${degree_1} and first color of ${color_1}. The second color of the gradient is ${color_2}.`;

    default:
      break;
  }

  document.body.style.background = `linear-gradient(${degree_1}deg, ${color_1}, ${color_2})`;
};

// run changeEvent() from above when input/keybord button is released.
colorForm.addEventListener("input", changeEvent);
colorForm.addEventListener("keyup", changeEvent);
