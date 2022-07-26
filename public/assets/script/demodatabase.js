const statusPosts = [
  {
    postID: 'ycErvugx5CveKgs5',
    postUser: 'Jack Doom' /**/,
    postUsername: 'jackdoom',
    postVerified: false /**/,
    postMessage: 'Lorem ipsum dolor sit amet',
    postLikes: 121231 /**/,
    postReposts: 21 /**/,
    postComments: 5 /**/,
    deleted: false,
    timestamp: new Date(1657660378000),
    postAvatarURL:
      'https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' /**/,
  },
  {
    postID: 'DAZ75x2kzKtA3P13',
    postUser: 'Jack Daemon' /**/,
    postUsername: 'jfs3h9js32',
    postVerified: true /**/,
    postMessage: 'Hello, This is the first POST',
    postLikes: 220 /**/,
    postReposts: 21 /**/,
    postComments: 5 /**/,
    deleted: true,
    timestamp: new Date(1657660378000),
    postAvatarURL:
      'https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' /**/,
  },
  {
    postID: 'U0JyBJNVPId7z',
    postUser: 'Rin Harley',
    postUsername: 'uJ0AmLIPWq',
    postVerified: false,
    postMessage: 'I am really hungry :(',
    postLikes: 25,
    postReposts: 1,
    postComments: 0,
    deleted: false,
    timestamp: new Date(1657660558000),
    postAvatarURL:
      'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    postID: 'QZ5n0wHM77us',
    postUser: 'Michael Wazowpi',
    postUsername: 'fj438ijsaj2',
    postVerified: true,
    postMessage: 'One word: Switch 2',
    postLikes: 12158,
    postReposts: 238,
    postComments: 78,
    deleted: true,
    timestamp: new Date(1657660738000),
    postAvatarURL:
      'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80',
  },
]

const chatMessages = [
  {
    incoming: true,
    id: 1,
    message: 'Hi, Im Mackenzie',
    deleted: false /* */,
  },
  {
    incoming: false,
    id: 2,
    message: 'I wanted to talk to you about something that bothered me',
    deleted: false /* */,
  },
  {
    incoming: true,
    id: 3,
    message: "Hi, sorry I've been busy. What is the matter?",
    deleted: false /* */,
  },
]

const messages = {
  elon: {
    messages: [
      {
        incoming: false,
        id: 1,
        message: 'How about that free Cybertruck? ;)',
        deleted: false /* */,
      },
      {
        incoming: true,
        id: 2,
        message:
          "Since you created this amazing website, I'll give you a small discount ;)",
        deleted: false /* */,
      },
      {
        incoming: true,
        id: 3,
        message: '1% off :)',
        deleted: false /* */,
      },
      {
        incoming: false,
        id: 4,
        message: 'lmao business is business. 1% off is still a good amount',
        deleted: false /* */,
      },
    ],
  },

  mackenzie: {
    messages: [
      {
        incoming: true,
        id: 1,
        message: 'you should definitely come down to new york city',
        deleted: false /* */,
      },
      {
        incoming: false,
        id: 2,
        message:
          "I've always wanted to go there. Let me finish a few projects first and I'll be on my way sometime this weekend",
        deleted: false /* */,
      },
      {
        incoming: true,
        id: 3,
        message: 'cool beans, see you there',
        deleted: false /* */,
      },
    ],
  },
}
