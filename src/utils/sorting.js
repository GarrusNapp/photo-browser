export const sorting = (arr, act) => {
  switch (act.payload.sortingMode) {
    case "likes_asc":
      return arr.sort((a, b) => {
        if (a.likes < b.likes) {
          return -1;
        } else {
          return 1;
        }
      });
    case "likes_dsc":
      return arr.sort((a, b) => {
        if (a.likes > b.likes) {
          return -1;
        } else {
          return 1;
        }
      });
    case "date_asc":
      return arr.sort((a, b) => {
        if (a.created_at < b.created_at) {
          return -1;
        } else {
          return 1;
        }
      });
    case "date_dsc":
      return arr.sort((a, b) => {
        if (a.created_at > b.created_at) {
          return -1;
        } else {
          return 1;
        }
      });
    default:
      return arr;
  }
};
