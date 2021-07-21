// export const server = "http://localhost:5000";
export const server = "https://squareboat-job-website.herokuapp.com";

const apiList = {
  login: `${server}/authorize/login`,
  signup: `${server}/authorize/signup`,
  jobs: `${server}/api/jobs`,
  applications: `${server}/api/applications`,
  user: `${server}/api/user`,
  applicants: `${server}/api/applicants`,
};

export default apiList;
