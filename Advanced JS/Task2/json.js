const xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    var response = JSON.parse(this.responseText);

    for (let i in response) {
      var row = `<tr>
      <td>${response[i].name}</td>
      <td>${response[i].email}</td>
      <td>${response[i].phone}</td>
      </tr>`;

      data.innerHTML += row;
    }
  }
};

xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/users");
xmlhttp.send();
