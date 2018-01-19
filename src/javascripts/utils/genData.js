function genData(pIndex = 0,data) {
  const dataBlob = {};
  for (let i = 0; i < data.length; i++) {
    const ii = (pIndex * data.length) + i;
    dataBlob[`${ii}`] = data[i]
  }
  return dataBlob;
}

export default genData