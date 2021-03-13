exports.create = user => {
  //console.log(env.production)
  let url = `https://ahsan-market.herokuapp.com/`;
  return fetch(`${url}api/v1/users/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

exports.list = () => {
  let url = `https://ahsan-market.herokuapp.com/`;
 
  return fetch(`${url}api/v1/users/`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

exports.read = (params, credentials) => {
  let url = `https://ahsan-market.herokuapp.com/`;

  return fetch(`${url}api/v1/users/` + params.userId, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + credentials.t
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

exports.update = (params, credentials, user) => {
  let url = `https://ahsan-market.herokuapp.com/`;
 
  return fetch(`${url}api/v1/users/` + params.userId, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + credentials.t
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

exports.remove = (params, credentials) => {
  let url = `https://ahsan-market.herokuapp.com/`;
 
  return fetch(`${url}api/v1/users/` + params.userId, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + credentials.t
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

exports.stripeUpdate = (params, credentials, auth_code) => {
  let url = `https://ahsan-market.herokuapp.com/`;
 
  return fetch(`${url}api/v1/users/stripe_auth/` + params.userId, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + credentials.t
    },
    body: JSON.stringify({ stripe: auth_code })
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};
