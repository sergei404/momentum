function getTimeOfDay(hours) {
  let partOfDay
  if (hours >= 6 && hours < 12) {
    partOfDay = 2
  } else if (hours >= 12 && hours < 18) {
    partOfDay = 3
  } else if (hours >= 18 && hours < 24) {
    partOfDay = 4
  } else {
    partOfDay = 1
  }
  return partOfDay
}

export function setBg() {  
  const img = new Image();
  img.src = `./images/${getTimeOfDay(new Date().getHours()).toString().padStart(2, '0')}.jpg`
  img.onload = () => {      
    document.body.style.background = `url(${img.src}) center/cover, rgba(0, 0, 0, 0.5)`
  }; 
}
