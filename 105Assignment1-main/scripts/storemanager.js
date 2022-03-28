const LS_KEY = "users"

function saveUser(user) {
  console.log('saveUser');

  //load the old data
  let data = readUsers();
  //merge old data and new user
  data.push(user)
  //save
  let val = JSON.stringify(data) //convert OBJ to JSON
  localStorage.setItem(LS_KEY, val)
}

function readUsers() {
    console.log('read user');
    let data = localStorage.getItem(LS_KEY); // get data from localStorage
    console.log('data getted: ', data);

    if (!data) {
        return [];
    }
    else {
        let list = JSON.parse(data) //convert JSON to OBJ
        return list
    }
}

function remove(index){
  let data = readUsers();
  //merge old data and new user
  data.splice(index, 1);
  //save
  let val = JSON.stringify(data) //convert OBJ to JSON
  localStorage.setItem(LS_KEY, val);
}