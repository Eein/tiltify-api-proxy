
class Client {
  constructor() {
    this.api_key = process.env.API_ACCESS_TOKEN
  }

  host() {
    return 'https://v5api.tiltify.com'
  }

  headers() {
    return {
      "Authorization": `Bearer ${this.api_key}`
    }
  }

  request(path) {
    let url = `${this.host()}${path}`
    let options = {
      headers: this.headers()
    }
    let data;

    return fetch(url, { 
      method: "GET", 
      headers: this.headers() 
    }).then((data) => {
      return data.json()
    })
  }
}

module.exports = Client;
