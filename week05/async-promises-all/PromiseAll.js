// TODO
const question1 = () => {
  // getCompanyRepos("microsoft").then((company) =>
  //   company.forEach((repo) => console.log(repo))
  // );

  // getCompanyRepos("google").then((company) =>
  //   company.forEach((repo) => console.log(repo))
  // );

  // getCompanyRepos("canva").then((company) =>
  //   company.forEach((repo) => console.log(repo))
  // );

  const microsoftRepos = getCompanyRepos("microsoft");
  const googleRepos = getCompanyRepos("google");
  const canvaRepos = getCompanyRepos("canva");
  Promise.all([microsoftRepos, googleRepos, canvaRepos])
    .then((companies) => {
      companies.forEach((company) => {
        company.forEach((repo) => console.log(repo))
      })
    })
}

const question2 = async () => {
  const microsoftRepos = getCompanyRepos("microsoft");
  const googleRepos = getCompanyRepos("google");
  const canvaRepos = getCompanyRepos("canva");

  const companies = await Promise.all([microsoftRepos, googleRepos, canvaRepos])
  companies.forEach((company) => {
    company.forEach((repo) => console.log(repo));
  })
}

const question3 = () => {
  const microsoftRepos = getCompanyRepos("microsoft");
  const fakeCompanyRepos = getCompanyRepos("some_fake_company");

  Promise.all([microsoftRepos, fakeCompanyRepos])
    .then((companies) => {
      companies.forEach((company) => {
        company.forEach((repo) => console.log(repo))
      })
    })
    .catch((err) => {
      console.log(err)
    })

}


const question4 = () => {
  const microsoftRepos = getCompanyRepos("microsoft");
  const googleRepos = getCompanyRepos("google");
  const canvaRepos = getCompanyRepos("canva");
  const fakeCompanyRepos = getCompanyRepos("some_fake_company");

  Promise.allSettled([microsoftRepos, googleRepos, canvaRepos, fakeCompanyRepos])
    .then((results) => {
      results.forEach((result) => {
        if (result.status === "rejected") {
          console.log(result.reason);
        } else if (result.status === "fulfilled") {
          result.value.forEach((repo) => console.log(repo))
        }
      })
    })
}

/**
 * Fetches public repo information from GitHub for a specific company
 * @param {String} companyName Company name
 * @returns A list of repo names belonging to the company
 */
async function getCompanyRepos(companyName) {
  // Since fetch isn't in NodeJS, use a library to polyfill it
  const fetch = require("node-fetch");

  // Fetch the company's repos from GitHub
  const response = await fetch(
    `https://api.github.com/orgs/${companyName}/repos`
  );
  const data = await response.json();

  // If the response is not OK, throw an error
  // This is the same as Promise.reject() in non-async functions
  if (response.status !== 200) {
    throw new Error(`Response of ${response.status} for ${companyName}`);
  }

  // Push the full names of each repo into an array
  const repoArray = [];
  data.forEach((repo) => repoArray.push(repo.full_name));

  return repoArray;
}

// question1();
// question2();
// question3();
question4();