
const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
  
      const characters = await charactersAPI.getFullList()
      console.log(characters.data)
    });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const inputId = document.getElementsByName("character-id")
    const id = inputId[0].value
   charactersAPI.getOneRegister(id)
     .then(response => {
       const charName = document.getElementsByClassName("name")
       charName[0].innerText += response.data.name
     })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("form submit: ", document.forms[0].element[0].value)

    const name = document.forms[0].element[0].value
    const occupation = document.forms[0].element[1].value
    const weapon = document.forms[0].element[2].value
    const cartoon = document.forms[0].element[3].value

    charactersAPI.createOneRegister({name, occupation, weapon, cartoon})
    .then(()=>location.reload())
  });
});
