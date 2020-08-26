const shadower = (elevation) => {
  return {
    shadowOpacity: 1,
    shadowOffset: {
      height: 1,
    },
    shadowRadius: 1,
    elevation: elevation ? elevation : 6,
  };
};

export default shadower;
