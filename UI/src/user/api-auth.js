const signin = user => {
  let url = `https://ahsan-market.herokuapp.com/`;
  return fetch(`${url}api/v1/auth/signin/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

const signout = () => {
  let url = `https://ahsan-market.herokuapp.com/`;
  return fetch(`${url}api/v1/auth/signout/`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export { signin, signout }