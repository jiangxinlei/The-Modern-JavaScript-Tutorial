async function getUsers(names) {
  let jobs = [];

  for(let name of names) {
    let job = fetch(`https://api.github.com/users/${name}`).then(
      res => {
        if (res.status === 200) {
          return res.json();
        }
      }
    );
    jobs.push(job);
  }

  let results = await Promise.all(jobs);

  console.log(results)

  return results;
}
getUsers(['jiangxinlei']);