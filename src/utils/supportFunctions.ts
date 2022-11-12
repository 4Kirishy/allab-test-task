export const whenCreated = (createdAtTime: Date, currentTime: Date) => {
  const yearDifference =
    currentTime.getFullYear() - createdAtTime.getFullYear();

  if (yearDifference >= 1) {
    return yearDifference === 1
      ? `${yearDifference} year ago`
      : `${yearDifference} years ago`;
  } else {
    const ms = 86400000; // ms in one day
    const days =
      (Date.parse(currentTime.toJSON()) - Date.parse(createdAtTime.toJSON())) /
      ms;

    if (Math.floor(days) === 0) {
      return "today";
    }

    if (days > 30) {
      return Math.floor(days / 30) === 1
        ? `${Math.floor(days / 30)} month ago`
        : `${Math.floor(days / 30)} months ago`;
    }

    return Math.floor(days) === 1
      ? `${Math.floor(days)} day ago`
      : `${Math.floor(days)} days ago`;
  }
};

export const formatTitle = (title: string) => {
  let titleAr: string | string[] = title.split(" ");

  if (window.screen.width > 476 || titleAr.length <= 5) {
    return title;
  }

  titleAr = titleAr
    .slice(0, titleAr.length - Math.floor(titleAr.length / 2))
    .join(" ");

  return `${titleAr}...`;
};
