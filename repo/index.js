import fetch from 'node-fetch';

export default class Repo {
  constructor(owner, secret) {
    this.owner = owner;
    this.clientIdAndSecret = Buffer.from(`${owner}:${secret}`).toString(
      'base64'
    );
  }

  async getRepo(repo) {
    return fetch(`https://api.github.com/repos/${this.owner}/${repo}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept-Language': 'en_US',
        Accept: 'application/json',
        Authorization: `Basic ${this.clientIdAndSecret}`,
      },
    });
  }

  async updateRepo(repo, data) {
    return fetch(`https://api.github.com/repos/${this.owner}/${repo}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': 'en_US',
        Accept: 'application/json',
        Authorization: `Basic ${this.clientIdAndSecret}`,
      },
      body: JSON.stringify(data),
    });
  }

  async deleteRepo(repo) {
    return fetch(`https://api.github.com/repos/${this.owner}/${repo}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept-Language': 'en_US',
        Accept: 'application/json',
        Authorization: `Basic ${this.clientIdAndSecret}`,
      },
    });
  }
}
