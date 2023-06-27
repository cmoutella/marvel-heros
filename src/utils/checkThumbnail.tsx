const checkThumbnail = (path: string) => {
  const invalid = path.includes("image_not_available");

  return !invalid;
};

export default checkThumbnail;
