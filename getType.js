export default function getType(data) {
  return Object.prototype.toString.call(data);
}


export default function getType2(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

