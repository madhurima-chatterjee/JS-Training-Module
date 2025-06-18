// promises
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });
};

fetchData().then(console.log);


// Async Await
async function load() {
  const data = await fetchData();
  console.log(data);
}
load();


// practice //
const promise = new Promise((resolve, reject) => {
  // async task
  if (success) resolve(data);
  else reject(error);
});

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("✅ Data loaded!");
    }, 1000);
  });
};

fetchData().then(data => {
  console.log(data); // ✅ Data loaded!
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
  .catch(err => console.error("❌ Error:", err));


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
  .catch(console.error); // ❌ Something went wrong


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
    console.error("❌ Error fetching:", error.message);
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
