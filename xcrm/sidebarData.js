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
  },

  actives: {
    title: "TOTAL ACTIVES",
    value: 52,
    changePercent: 0
  },
  blocked: {
    title: "TOTAL BLOCKED",
    value: 0,
    changePercent: 0
  },
  total: {
    title: "TOTAL LEADS",
    value: 92048,
    changePercent: 0
  },
  assigned: {
    title: "ASSIGNED LEADS",
    value: 9431,
    changePercent: 0
  },
  unassigned: {
    title: "UNASSIGNED LEADS",
    value: 82617,
    changePercent: 0
  },
  products: {
    title: "TOTAL PRODUCTS",
    value: 1,
    changePercent: 0
  },
  sales: {
    title: "TOTAL SALES",
    value: 6,
    changePercent: 0
  },
  compaigns: {
    title: "TOTAL COMPAIGNS",
    value: 12,
    changePercent: 0
  },
  work: {
    title: "LEADS WITH WORK",
    value: 3126,
    changePercent: 0
  },

};
 

export { sidebarData, cardData, };



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