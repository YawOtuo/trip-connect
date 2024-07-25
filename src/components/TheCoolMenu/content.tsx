export const linksBeforeLogin = [
  { id: "#", url: "/login", name: "LOGIN" },
  { id: "#", url: "/flexible-bookings", name: "FLEXIBLE BOOKINGS" },

  // },
  { id: "#", url: "/fixed-bookings", name: "FIXED BOOKINGS" },

  // { id: "#", url: "/dashboard/trips", name: "MY TRIPS" },

  { id: "#", url: "/terms-and-conditions", name: "TERMS AND CONDITIONS" },

  {
    id: "#",
    url: "#",
    name: "DASHBOARD",
    sub: [
      {
        name: "View Dashboard ",
        id: "/dashboard",
        label: "dashboard",
        url: "/dashboard",
      },

      {
        url: "/dashboard/trips",
        name: "My Trips",
        id: "#",
        label: "trips",
      },

      {
        name: "My Vehicles ",
        id: "vehicles",
        label: "vehicles",
        url: "/dashboard/vehicles",
      },
      {
        name: "My Notifications",
        id: "#",
        label: "notifications",
        url: "/dashboard/notifications",
      },
      {
        name: "My Details",
        id: "#",
        label: "details",
        url: "/dashboard/account",
      },
    ],
  },
];
