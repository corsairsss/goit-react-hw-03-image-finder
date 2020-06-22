export default {
  duration: 5000,
  position: {
    x: 'center',
    y: 'top',
  },
  types: [
    {
      type: 'badRequest',
      backgroundColor: 'red',
      icon: false,
      message: `ERROR - PLEASE, TRY LATER....`,
      dismissible: true,
      duration: 3000,
    },
  ],
};
