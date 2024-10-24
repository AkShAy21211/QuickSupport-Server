function generateTickerId(length = 6) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let tickerId = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    tickerId += characters[randomIndex];
  }

  return tickerId;
}

export default generateTickerId;
