import 'dotenv/config';
import { config } from './config.js';
import Repo from './repo/index.js';

const { repo_owner, repo_name, repo_update } = config;

const repo = new Repo(repo_owner, process.env.PERSONAL_ACCESS_TOKEN);

//get repo
repo
  .getRepo(repo_name)
  .then((response) => response.json())
  .then((result) => console.log(result));

//update repo
repo
  .updateRepo(repo_name, repo_update)
  .then((response) => response.json())
  .then((result) => console.log(result));

//delete repo
repo
  .deleteRepo('dope_repo')
  .then((response) => console.log(response.status, response.statusText));
