
function inputTag(id, placeholder, type = "text", name = "", value = "") {
    let input = document.createElement("input");
    input.className = id;
    input.setAttribute("type", type);
    input.setAttribute("id", id);
    input.setAttribute("name", name);
    input.setAttribute("value", value);
    input.setAttribute("placeholder", placeholder);
    return input;
  }
  
  function tdth(tag, txt, label) {
    let t = document.createElement(tag);
    t.innerHTML = txt;
    t.setAttribute("data-label", label);
    return t;
  }
  
  function nameTag(divName, id, placeholder) {
    let div = document.createElement("div");
    div.className = divName;
    let label = document.createElement("label");
    label.innerHTML = placeholder;
    let input = inputTag(id, placeholder);
    div.append(label, input);
    return div;
  }
  
  function createDiv(tag, id, className) {
    let div = document.createElement(tag);
    div.setAttribute("id", id);
    div.className = className;
    return div;
  }
  function addressTag() {
    let div1 = createDiv("div", "", "field");
    let label = createDiv("label");
    label.innerHTML = "Address";
    let div2 = createDiv("div", "", "fields");
    let div3 = createDiv("div", "", "twelve wide field");
    let inputAdd = inputTag("address", "Street Address");
    let div4 = createDiv("div", "", "four wide field");
    let inputPin = inputTag("pincode", "Pin Code");
    div4.append(inputPin);
    div3.append(inputAdd);
    div2.append(div3, div4);
    div1.append(label, div2);
    return div1;
  }
  
  function genderTag() {
    let div1 = createDiv("div", "", "inline fields");
    let label = createDiv("label");
    label.innerHTML = "Gender:";
    label.setAttribute("for", "gender");
    let div2 = createDiv("div", "", "field");
    let div3 = createDiv("div", "", "ui radio checkbox");
    let male = inputTag("gender", "", "radio", "gender", "male");
    let label2 = createDiv("label");
    label2.innerHTML = "Male";
    let div4 = createDiv("div", "", "field");
    let div5 = createDiv("div", "", "ui radio checkbox");
    let female = inputTag("gender", "", "radio", "gender", "female");
    let label3 = createDiv("label");
    label3.innerHTML = "Female";
    div5.append(female, label3);
    div4.append(div5);
    div3.append(male, label2);
    div2.append(div3);
    div1.append(label, div2, div4);
    return div1;
  }
  
  function foodTag() {
    function spanTag(txt) {
      let span = document.createElement("span");
      span.innerHTML = txt + "<br>";
      return span;
    }
  
    // HTML elements creation for FORM
  
    let div1 = createDiv("div", "", "inline field");
    let label = createDiv("label");
    label.innerHTML = "Choice of food <i>(Must select 2 of 5)</i>";
    let north = inputTag(
      "ui button food",
      "",
      "checkbox",
      "food",
      "north Indian"
    );
    let northTxt = spanTag("North Indian");
    let south = inputTag(
      "ui button food",
      "",
      "checkbox",
      "food",
      "south Indian"
    );
    let southTxt = spanTag("South Indian");
    let chin = inputTag("ui button food", "", "checkbox", "food", "Chinese");
    let chinese = spanTag("Chinese");
    let jap = inputTag("ui button food", "", "checkbox", "food", "japanese");
    let japanese = spanTag("Japanese");
    let sea = inputTag("ui button food", "", "checkbox", "food", "sea food");
    let seaFoo = spanTag("Sea Food");
    let br1 = createDiv("br");
    let br2 = createDiv("br");
    let br3 = createDiv("br");
  
    div1.append(
      label,
      br1,
      br2,
      north,
      northTxt,
      south,
      southTxt,
      chin,
      chinese,
      jap,
      japanese,
      sea,
      seaFoo,
      br3
    );
    return div1;
  }
  
  let divContainer = createDiv("div", "container", "ui grid");
  let divCol1 = createDiv("div", "", "column column1");
  let h1 = document.createElement("h1");
  h1.setAttribute("id", "title");
  h1.innerHTML = "Form Submission :";
  let p1 = document.createElement("p");
  p1.setAttribute("id", "description");
  p1.innerHTML = "DOM manipulation with form submission";
  let form = document.createElement("form");
  form.setAttribute("id", "form");
  form.className = "ui form";
  form.setAttribute("action", "#");
  let fNameEl = nameTag("field", "first-name", "First Name");
  let lNameEl = nameTag("field", "last-name", "Last Name");
  let addTag = addressTag();
  let genTag = genderTag();
  let fooTag = foodTag();
  let stateEl = nameTag("field", "state", "State");
  let countryEl = nameTag("field", "country", "Country");
  let btn = createDiv("button", "submit", "btn ui button");
  btn.setAttribute("type", "submit");
  btn.innerHTML = "Submit";
  
  form.append(fNameEl, lNameEl, addTag, genTag, fooTag, stateEl, countryEl, btn);
  divCol1.append(h1, p1, form);
  divContainer.append(divCol1);
  document.body.append(divContainer);
  
  // HTML form creation for Table
  
  let divCol2 = createDiv("div", "", "column column2");
  let table = createDiv("table", "", "ui very compact table");
  let thead = createDiv("thead");
  let th1 = tdth("th", "First Name");
  let th2 = tdth("th", "Last Name");
  let th3 = tdth("th", "Gender");
  let th4 = tdth("th", "Address");
  let th5 = tdth("th", "Pincode");
  let th6 = tdth("th", "State");
  let th7 = tdth("th", "Country");
  let th8 = tdth("th", "Food");
  let tbody = createDiv("tbody");
  
  // Selecting the form elements for retrieving the value
  
  var fName = document.getElementById("first-name");
  var lName = document.getElementById("last-name");
  var address = document.getElementById("address");
  var pinCode = document.getElementById("pincode");
  var gender = document.getElementsByName("gender");
  var food = document.getElementsByName("food");
  var state = document.getElementById("state");
  var country = document.getElementById("country");
  
  let tr;
  
  // Inner row creation function once form is submitted
  
  function createTable(
    fname,
    lname,
    address,
    pincode,
    gender,
    food,
    state,
    country
  ) {
    tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");
    let td8 = document.createElement("td");
    td1.innerHTML = fname;
    td2.innerHTML = lname;
    td3.innerHTML = address;
    td4.innerHTML = pincode;
    td5.innerHTML = gender;
    td6.innerHTML = food;
    td7.innerHTML = state;
    td8.innerHTML = country;
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
    return tr;
  }
  
  // Creating a event listener fo the button
  
  document.querySelector("#submit").addEventListener("click", (e) => {
    e.preventDefault();
    let genderSel = "";
    for (let i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        genderSel = gender[i].value;
        gender[i].checked = false;
      }
    }
  
    let favFood = [];
  
    for (let i = 0; i < food.length; i++) {
      if (food[i].checked) {
        favFood.push(food[i].value);
        food[i].checked = false;
      }
    }
    if (favFood.length < 2) {
      alert("Please select atleast two food");
      return;
    }
  
    tr = createTable(
      fName.value,
      lName.value,
      genderSel,
      address.value,
      pinCode.value,
      state.value,
      country.value,
      favFood.join(",")
    );
    tbody.append(tr);
  
    fName.value = "";
    lName.value = "";
    address.value = "";
    pinCode.value = "";
    genderSel = "";
    favFood = "";
    state.value = "";
    country.value = "";
  });
  
  // Adding the all the created elements to DOM
  
  thead.append(th1, th2, th3, th4, th5, th6, th7, th8);
  
  table.append(thead, tbody);
  divCol2.append(table);
  divContainer.append(divCol2);
  document.body.append(divContainer);