export function truncateString(str: string, num: number) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

export function getRandomIndexOrobj(arr: any[]): {
  index: number,
  randomObj: object,
}|null {
  if (arr.length === 0) {
    return null;  // Return null if the array is empty
  }
  const index = Math.floor(Math.random() * arr.length)
  return {
    index,
    randomObj: arr[index]
  }
}

export const proxyUrl = (url: string, referer: string) => {
  return `/api/proxy?src=${encodeURIComponent(
    url
  )}&referer=${encodeURIComponent(referer)}`;
};