const sendStatus = document.querySelector('.statusform__send')
const statusDom = document.querySelector('.status')

statusPosts.forEach(post => {
  if (post.deleted) return

  sendStatus.addEventListener('click', () => {
    alert('Status sent')
    document.querySelector('.statusform__field').value = ''
  })

  let newPost = document.createElement('div')
  newPost.classList.add('cardbox')
  newPost.innerHTML = `<div class="status__struct">
    <div class="status__struct__img">
      <a href="#">
        <img
          src="${post.postAvatarURL}"
          alt="avatar"
          class="avatar"
        />
      </a>
    </div>

    <div class="status__structinfo">
      <div class="status__struct__userdata">
        <div class="status__struct__author">
          <a href="#" class="status__struct__name"
            >${post.postUser}</a
          >
          
          ${
            post.postVerified
              ? `<ion-icon
          class="status__struct__verified"
          name="checkmark-circle"
        ></ion-icon>`
              : ``
          }
          <p class="status__struct__username">@${post.postUsername}</p>
        </div>
        <span class="status__struct__options">
          &middot;&middot;&middot;
        </span>
      </div>

      <p class="status__struct__timestamp">${post.timestamp}</p>
      <p class="status__struct__message">
        ${post.postMessage}
      </p>

      <div class="status__struct__reactions">
        <div class="status__struct__stats">
          <ion-icon name="heart"></ion-icon> <span>${numeral(
            post.postLikes
          ).format('0a')}</span>
          <ion-icon name="repeat"></ion-icon>
          <span>${numeral(post.postReposts).format('0a')}</span>
        </div>
        <div class="status__struct__comments">
          <a href="#">${numeral(post.postComments).format('0a')} comments</a>
        </div>
      </div>
      <div class="status__struct__interactions">
        <div class="l-${post.postID} status__struct__btn">
          <ion-icon class="l-${
            post.postID
          }" name="heart"></ion-icon> <span class="l-${post.postID}">Like</span>
        </div>
        <div class="r-${post.postID} status__struct__btn">
          <ion-icon class="r-${post.postID}" name="repeat"></ion-icon>
          <span class="r-${post.postID}">Repost</span>
        </div>
        <div class="status__struct__btn com">       
          <ion-icon class="com" name="chatbubble-ellipses"></ion-icon>
          <span class="com">Comment</span>
        </div>
      </div>
    </div>
  </div>`
  statusDom.prepend(newPost)

  const likeBtn = document.querySelector(`.l-${post.postID}`)
  const repostBtn = document.querySelector(`.r-${post.postID}`)
  // console.log(interaction)
  const interactionBtn = [likeBtn, repostBtn]

  /*
        First Grab all the class names of the button that was pressed and turn it to an array
        First Class should always be the specifier for the post (l-fsdfa or r-jfasi)
        L is for Like
        R is for Repost
  
        anything after l- or r- is the unique ID of the post l-(fjais) r-(ajsdkf)
  
        The Specifier should be in the WHOLE button, span tag and icon


        NOTE TO SELF IN FUTURE:
          create a model of INTERACTIONS rather different type of models for both liked and reposted for database
       */

  interactionBtn.forEach(btn => {
    btn.addEventListener('click', ele => {
      // let classNames = ele.target.className.split(' ')
      // let element = classNames[0]
      // let arr = element.split('')
      // let type = arr[0]
      // console.log(classNames)
      // console.log(element)
      // console.log(type)

      let [type, arr, element, classNames] = decipherClass(ele)

      // this breaks sometimes
      if (classNames.includes('com')) {
        alert('thats a comment, it should not work')
        return
      }

      arr.shift()
      arr.shift()
      const postID = arr.join('')

      if (type === 'r') {
        type = 'reposted'
      } else {
        type = 'liked'
      }

      btn.classList.toggle(type)

      console.log(btn.classList.value)

      const btnStatus = btn.classList.value.split(' ')[2] || null
      console.log(btnStatus)
      if (btnStatus === 'liked' || btnStatus === 'reposted') {
        console.log(`Just ${type} it!`)
        // send a post request
      } else {
        console.log(`Just un${type} it`)

        //send a post request that
      }

      console.log(postID)
    })
  })
})
