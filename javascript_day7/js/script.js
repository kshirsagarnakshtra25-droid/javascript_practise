// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((users)=>{
//         users.map((user)=>{
//             console.log(`Id: ${user.id} Name: ${user.name}
//                 UserName : ${user.username} Email : ${user.email}
//                 Address : ${user.address.city}`)
//         })
//       })



    // Modern Async/Await Pattern for API Fetching
    // Modern Async/Await Pattern for API Fetching

// async function fetchData() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users", {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": "Bearer YOUR_API_KEY" // If API key is required
//             }
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP Error! Status: ${response.status}`);
//         }

//         const data = await response.json();

//         console.log("API Data Received:", data);

//     } catch (error) {
//         console.error("Fetch Error:", error);
//     }
// }

// Call the function
// fetchData();
// async function fetchData() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");

//         if (!response.ok) {
//             throw new Error(`HTTP Error! Status: ${response.status}`);
//         }

//         const data = await response.json();

//         console.log(data);

//     } catch (error) {
//         console.error("Fetch Error:", error);
//     }
// }

// fetchData();

// async function fetchData() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();

//         data.forEach(users => {
//             document.write(users.name + "<br>");
//         });

//     } catch (error) {
//         console.error(error);
//     }
// }

// fetchData();