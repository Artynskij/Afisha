const url = "https://webgate.24guru.by/api/v2";
const test = "https://cdn.mysitemapgenerator.com/shareapi/rss/0106566306";
export class Api {
     getTest() {
      return fetch(`${test}`, {
        method:'GET',
        headers:{
          'Content-Type': 'text/plain',
          // "Access-Control-Allow-Origin":'http://127.0.0.1:5501/index.html'
        }
        
      }).then((r) => {
        if (r.ok) {
          return r;
        }
      });
    }
    // getGoods(id) {
    //   return fetch(`/api/goods?${id}`).then((r) => {
    //     if (r.ok) {
    //       return r.json();
    //     }
    //   });
    // }
    // getСategories(id) {
    //   return fetch(`/api/categories?${id}`).then((r) => {
    //     if (r.ok) {
    //       return r.json();
    //     }
    //   });
    // }
    // getPopularGoods() {
    //   return fetch(`/api/popular_categories`).then((r) => {
    //     if (r.ok) {
    //       return r.json();
    //     }
    //   });
    // }
    // getСart() {
    //   return fetch("/api/cart").then((resp) => {
    //     if (resp.ok) {
    //       return resp.json();
    //     }
    //   });
    // }
    // changeCart(data, method) {
    //   return fetch("/api/cart", {
    //     method: method,
    //     body: JSON.stringify(data),
    //   });
    // }
    // getLogin() {
    //   return fetch("/api/account").then((resp) => {
    //     if (resp.ok) {
    //       return resp.json();
    //     }
    //   });
    // }
    // changeLogin(data, method) {
    //   const { login, password } = data;
  
    //   return fetch("/api/account", {
    //     method: method,
    //     body: JSON.stringify({ login, password }),
    //   });
    // }
    // getAuthUser() {
    //   return fetch("/api/authUser").then((resp) => {
    //     if (resp.ok) {
    //       return resp.json();
    //     }
    //   });
    // }
    // changeAuthUser(data, method) {
    //   const { login, password } = data;
  
    //   return fetch("/api/authUser", {
    //     method: method,
    //     body: JSON.stringify({ login, password }),
    //   });
    // }
    getTowns() {
      return fetch(`${url}/cities`).then((r) => {
        if (r.ok) {
          return r.json();
        }
      });
    }
    getPerfomance() {
      return fetch(`${url}/sellers/performance/distibution`).then((r) => {
        if (r.ok) {
          return r.json();
        }
      });
    }
    // getImage(urlImage) {
    //   return fetch(`${url}${urlImage}`).then((r) => {
    //     if (r.ok) {
    //       return r.json();
    //     }
    //   });
    // }
  }