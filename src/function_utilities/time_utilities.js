const currentDate = () => {
  let currentTime = new Date();
  let year = currentTime.getUTCFullYear();
  let month = currentTime.getMonth();
  let day = currentTime.getDate();
  return `${year}. ${month + 1}. ${day}`;
};

export { currentDate };
