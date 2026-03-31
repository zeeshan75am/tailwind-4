// sidebarData.js
const sidebarData = [
  { id: 1, icon: "dashboard", label: "Dashboard" },
  { id: 2, icon: "groups", label: "Users" },
  { id: 3, icon: "person", label: "Profile" },
  { id: 4, icon: "campaign", label: "Campaigns" },
  { id: 5, icon: "shopping_cart", label: "Orders" },
  { id: 6, icon: "storefront", label: "Store" },
  { id: 7, icon: "person_search", label: "Customers" },
  { id: 8, icon: "inventory", label: "Inventory" },
  { id: 9, icon: "settings", label: "Settings" }
];

const cardData = {
  orders: {
    title: "Orders",
    value: 128 
  },
  
  users: {
    title: "TOTAL USERS",
    value: 52,
    changePercent: 0
  }
};



export { sidebarData, cardData };



// const cardData = {
//   orders: {
//     title: "Orders",
//     value: 0,
//     icon: "fa-layer-group",
//     trend: {
//       percentage: "0%",
//       direction: "up", // up | down
//       color: "blue"
//     },
//     note: "From previous period"
//   }
// };

// export default cardData;