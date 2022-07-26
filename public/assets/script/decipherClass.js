const decipherClass = ele => {
  if (!ele) return

  let classNames = ele.target.className.split(' ')
  let element = classNames[0]
  let arr = element.split('-')
  let type = arr[0]

  return [type, arr, element, classNames]
}
