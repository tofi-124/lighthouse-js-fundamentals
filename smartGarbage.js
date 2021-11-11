let waste, recycling, compost;
function smartGarbage(trash, bins = { waste, recycling, compost }) {
  if (trash === "waste") bins.waste++;
  else if (trash === "recycling") bins.recycling++;
  else if (trash === "compost") bins.compost++;
  return bins;
}
