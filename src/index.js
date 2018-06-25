import './index.css';

import {getUsers} from './api/userApi';

// Populate table of users via API call.
getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody+= `<h1>${user.message}</h1>`
  });

  global.document.getElementById('memories').innerHTML = usersBody;
});