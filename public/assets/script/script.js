const sendStatus = document.querySelector('.statusform__send')
const like = document.querySelectorAll('.status__struct__btn')

like.forEach(btn => {
  btn.addEventListener('click', ele => {
    // console.log(ele)
    // console.log(ele.target.className)

    /*
      First Grab all the class names of the button that was pressed and turn it to an array
      First Class should always be the specifier for the post (l-fsdfa or r-jfasi)
      L is for Like
      R is for Repost

      anything after l- or r- is the unique ID of the post l-(fjais) r-(ajsdkf)

      The Specifier should be in the WHOLE button, span tag and icon
     */

    let classNames = ele.target.className.split(" ");
    let element = classNames[0];
    let arr = element.split("")
    let type = arr[0]
    console.log(classNames)
    console.log(element)
    console.log(type)

    // this breaks sometimes
    if (classNames.includes("com")) {
      alert('thats a comment, it should not work')
      return;
    }

    arr.shift()
    arr.shift()
    const postID = arr.join("")

    if (type === 'r') {
      type = 'reposted'
    } else {
      type = 'liked'
    }

    btn.classList.toggle(type)

    console.log(postID)
  })
})

sendStatus.addEventListener('click', () => {
  alert('Status sent')
  document.querySelector('.statusform__field').value = ''
})
