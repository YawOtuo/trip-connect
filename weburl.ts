// let url = "http://127.0.0.1:8000/";

let url = "https://trip-connect-e7497c974b59.herokuapp.com/"

// Check if running in production
if (process.env.NODE_ENV === "production") {
  url = "https://trip-connect-e7497c974b59.herokuapp.com/";
}

export { url };
