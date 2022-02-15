import 'dotenv/config';
import fetch from 'node-fetch';

const owner = 'huotsai2fi';
const repo = 'cool_repo';
const renameRepoTo = 'cool_repo';

const clientIdAndSecret = `${process.env.GITHUB_USERNAME}:${process.env.PERSONAL_ACCESS_TOKEN}`;
const base64 = (text) => Buffer.from(text).toString('base64');

const getRepoAPI = async (owner, repo) => {
  return fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept-Language': 'en_US',
      Accept: 'application/json',
      Authorization: `Basic ${base64(clientIdAndSecret)}`,
    },
  });
};

const getRepo = async () => {
  let repoDetails = await getRepoAPI(owner, repo);
  return repoDetails.json();
};

const updateRepoAPI = async (owner, repo) => {
  return fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'en_US',
      Accept: 'application/json',
      Authorization: `Basic ${base64(clientIdAndSecret)}`,
    },
    body: JSON.stringify({
      name: `${renameRepoTo}`,
    }),
  });
};

const updateRepo = async () => {
  let repoDetails = await updateRepoAPI(owner, repo);
  return repoDetails.json();
};

const deleteRepoAPI = async (owner, repo) => {
  return fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept-Language': 'en_US',
      Accept: 'application/json',
      Authorization: `Basic ${base64(clientIdAndSecret)}`,
    },
  });
};

const deleteRepo = async () => {
  return deleteRepoAPI(owner, repo);
};

(async () => {
  //   const result_1 = await getRepo();
  //   const result_2 = await updateRepo();
  const result_3 = await deleteRepo();
  console.log(result_3);
})();
