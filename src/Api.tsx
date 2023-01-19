export const POSTS = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    post: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
      { type: "tags", content: ["#novoprojeto", "#nlw", "#rocketseat"] },
    ],
    publishedAt: new Date("2022-12-25 18:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/DanielHe4rt.png",
      name: "Daniel Reis",
      role: "Dev Back-End PHP",
    },
    post: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
      { type: "tags", content: ["#novoprojeto", "#nlw", "#rocketseat"] },
    ],
    publishedAt: new Date("2023-01-01 12:00:00"),
  },
];

export const COMMENT1 = {
  userAvatar: "https://github.com/cumsoft.png",
  userName: "Cumsoft",
  date: new Date("2023-01-17 20:00:00"),
  message: "Muito legal esse projeto, voa filhão🚀🚀🚀",
  likes: 10,
};
export const COMMENT2 = {
  userAvatar: "https://github.com/gianniniluan.png",
  userName: "Luan Giannini",
  date: new Date("2023-01-17 14:32:00"),
  message:
    "Achei muito interessante a estilização da página, mandou muito no CSS",
  likes: 25,
};
