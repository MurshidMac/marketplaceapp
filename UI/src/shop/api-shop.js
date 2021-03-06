const create = (params, credentials, shop) => {
  let url = `https://ahsan-market.herokuapp.com/`;
  return fetch(`${url}api/v1/shops/by/` + params.userId, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + credentials.t
    },
    body: shop
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

const list = () => {
  let url = `https://ahsan-market.herokuapp.com/`;
  return fetch(`${url}api/v1/shops`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

const listByOwner = (params, credentials) => {
  let url = `https://ahsan-market.herokuapp.com/`;
  return fetch(`${url}api/v1/shops/by/` + params.userId, {
    method: "GET",
    headers: {
      Accept: "application/json",
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

const read = (params, credentials) => {
  let url = `https://ahsan-market.herokuapp.com/`;
  return fetch(`${url}api/v1/shops/` + params.shopId, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

const update = (params, credentials, shop) => {
  let url = `https://ahsan-market.herokuapp.com/`;
  return fetch(`${url}api/v1/shops/` + params.shopId, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + credentials.t
    },
    body: shop
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};
const remove = (params, credentials) => {
  let url = `https://ahsan-market.herokuapp.com/`;
  return fetch(`${url}api/v1/shops/` + params.shopId, {
  method: 'DELETE',
  headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + credentials.t
  }
  }).then((response) => {
  return response.json()
  }).catch((err) => {
  console.log(err)
  })
  }

module.exports = { create, list, listByOwner, read, update, remove };
