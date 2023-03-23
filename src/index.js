const Output7 = document.querySelector("#result7");
const Output8 = document.querySelector("#result8");
const Output9 = document.querySelector("#result9");
const Output10 = document.querySelector("#result10");
const Output11 = document.querySelector("#result11");

// ---------------------- question 7-----------

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/chat") {
//         reject({
//           status: 503,
//           message: "Service Unavailable"
//         });
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success"
//           }
//         });
//       }
//     }, 2000);
//   });
// };

// // Your Code here

// fakeFetch("https://example.com/api/chat")
//   .then((data) => console.log(data))
//   .catch((err) => {
//     if (err.status === 503) {
//       Output7.textContent =
//         "We are facing high demand at the moment. Please check back later in sometime.";
//     }
//   });

// Output on the DOM should be:
// We are facing high demand at the moment. Please check back later in sometime.

// ---------------------------------------------------

// question 8
// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/itemlist") {
//         resolve({
//           status: 200,
//           message: "Success",
//           data: [
//             { itemName: "Bread", price: 30, quantity: 10 },
//             { itemName: "Water Bottle", price: 50, quantity: 50 },
//             { itemName: "Dairy Milk", price: 20, quantity: 30 }
//           ]
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "Items list not found."
//         });
//       }
//     }, 2000);
//   });
// };

// // Your Code here

// fakeFetch("https://example.com/api/itemlist").then((result) => {
//   var item_list = result.data.map(
//     (i) => `${i.itemName} -- INR ${i.price} -- ${i.quantity}`
//   );
//   for (let item of item_list) {
//     let li = document.createElement("li");
//     let node = document.createTextNode(item);
//     li.appendChild(node);
//     Output8.appendChild(li);
//   }
// })
// .catch(err => console.err(err))

// Output on the DOM should be in the format, {itemName} -- INR {price} -- {quantity}:
// 1. Bread -- INR 30 -- 10
// 2. Water Bottle -- INR 50 -- 50
// 3. Dairy Milk -- INR 20 -- 30

// --------------------------Question 9-------

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/data") {
//         reject({
//           status: 500,
//           message: "Internal Server Error"
//         });
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success"
//           }
//         });
//       }
//     }, 2000);
//   });
// };

// // Your Code here

// fakeFetch("https://example.com/api/data")
// .then(data=> console.log(data))
// .catch(err  => {
//   if(err.status === 500){
//     Output9.textContent = `${err.message}! The server crashed. Please try again in some time. `
//   }
// })

// Output on the DOM should be:
// Internal Server Error! The server crashed. Please try again in some time.

// ----------------qusetion 10-----------

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/profile") {
//         reject({
//           status: 401,
//           message: "Unauthorized Access"
//         });
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success"
//           }
//         });
//       }
//     }, 2000);
//   });
// };

// // Your Code here

// fakeFetch("https://example.com/api/profile")
//   .then((data) => console.log(data))
//   .catch((err) => {
//     if (err.status === 401)
//       Output10.textContent = `${err.message}! Looks like you are not logged in. Please login to see your profile data.`;
//   });

// Output on the DOM should be:
// Unauthorized Access! Looks like you are not logged in. Please login to see your profile data.

// ---------------------Question 11-----------------

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/profile/NC002") {
        resolve({
          status: 200,
          data: {
            message: "Success",
            data: { id: "NC002", name: "Roshan", institute: "neoG Camp" }
          }
        });
      } else {
        reject({
          status: 404,
          message: "Resource not found"
        });
      }
    }, 2000);
  });
};

// Your Code here

fakeFetch("https://example.com/api/profile/NC002")
  .then((result) => {
    const { name, institute } = result.data.data;
    Output11.innerHTML = `Welcome!, ${name} from ${institute}`;
  })
  .catch((err) => console.error(err));

// Output on the DOM should be: Welcome!, Roshan from neoG Camp

// -------------------------------------
