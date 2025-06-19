// promises
// 1. First fetchData example
const fetchData1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });
};

fetchData1().then(console.log);

// 2. Async/Await example
async function load() {
  const data = await fetchData1();
  console.log(data);
}
load();

// 3. Custom Promise
const success = true; // Change this to false to test rejection
const data = "Custom promise resolved!";
const error = "Custom promise rejected!";

const customPromise = new Promise((resolve, reject) => {
  if (success) resolve(data);
  else reject(error);
});

// 4. Second fetchData example (renamed to avoid conflict)
const fetchData2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data loaded!");
    }, 1000);
  });
};

// Using the custom promise
customPromise
  .then(result => {
    console.log("Custom Promise:", result);
  })
  .catch(err => {
    console.error("Custom Promise Error:", err);
  });

// Using the second fetchData function
fetchData2()
  .then(result => {
    console.log("fetchData2:", result);
  })
  .catch(err => {
    console.error("fetchData2 Error:", err);
  });

// cleaning with .then()
const stepOne = () => Promise.resolve("Step 1");
const stepTwo = () => Promise.resolve("Step 2");

stepOne()
  .then(result => {
    console.log(result); // Step 1
    return stepTwo();
  })
  .then(result => {
    console.log(result); // Step 2
  })
  .catch(err => console.error("Error:", err));


// Promises with .catch() for error handling
const mayFail = (ok) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ok ? resolve("Success") : reject("Something went wrong");
    }, 1000);
  });
};

mayFail(false)
  .then(console.log)
  .catch(console.error); // Something went wrong


  async function fetchMessage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  console.log(data.title);
}

fetchMessage();

// try catch for error handling
async function safeFetch() {
  try {
    const res = await fetch("https://api.invalid-url.com");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching:", error.message);
  }
}

// async await with multiple requests
async function loadMultiple() {
  const urls = [
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/posts/1"
  ];

  const [userRes, postRes] = await Promise.all(urls.map(url => fetch(url)));
  const user = await userRes.json();
  const post = await postRes.json();

  console.log("User:", user.name);
  console.log("Post Title:", post.title);
}

// mixing promises and async
const fetchPost = () => fetch("https://jsonplaceholder.typicode.com/posts/1");

async function loadPost() {
  const res = await fetchPost(); // Promise returned from fetchPost
  const data = await res.json();
  console.log("Post:", data.title);
}
