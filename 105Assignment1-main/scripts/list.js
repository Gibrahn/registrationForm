function displayUsers(users) {
    //travel the array
    $("#tableUsers").html("");
    let data ="";
    for (let i = 0; i < users.length; i++) {
        data = data + createUser(users[i], i);
  }

  $("#tableUsers").html(data);
}

function createUser(user, index){
    return `<tr>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.email}</td>
                <td>${user.age}</td>
                <td>${user.address}</td>
                <td>${user.cardNumber}</td>
                <td>${user.contactPhone}</td>
                <td><input type='button' value='remove' onclick='removeUser(${index})'/> </td>
          </tr>`;
}
function removeUser(index){
  remove(index);
  let users=readUsers();
  displayUsers(users);
}


function init() {
  console.log('listening users');
  let users = readUsers();
  displayUsers(users)
}

window.onload = init;