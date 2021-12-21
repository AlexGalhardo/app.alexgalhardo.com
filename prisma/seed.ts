import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.deleteMany({});
  await prisma.game.deleteMany({});
  await prisma.book.deleteMany({});
  await prisma.movie.deleteMany({});
  await prisma.tvshow.deleteMany({});

  await prisma.user.create({
    data: {
      email: 'alex@gmail.com',
      name: 'Alex',
      confirmed_email: false,
      confirm_email_token: '',
      password: 'aiushiuaskopapk12pokpk12',
      reset_password_token: '',
      admin: true,
      avatar: '',
      document: '',
      phone: '',
      birth_date: '',
      google_id: '',
      github_id: '',
      facebook_id: '',
      address_zipcode: '',
      address_street: '',
      address_street_number: '',
      address_neighborhood: '',
      address_city: '',
      address_state: '',
      address_country: '',
      stripe_customer_id: '',
      stripe_card_id: '',
      stripe_card_brand: '',
      stripe_card_last4: '',
      stripe_card_exp_month: '',
      stripe_card_exp_year: '',
      stripe_currently_subscription_id: '',
      stripe_currently_subscription_name: '',
      stripe_subscription_start: '',
      stripe_subscription_end: '',
    },
  });

  await prisma.blog.create({
    data: {
      title: 'Why Simpsons Is So Succesfull?',
      resume: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      image: 'https://picsum.photos/id/1/230/230',
      category: 'Software',
      slug: 'why-simpsons-is-so-succesfull',
      body: "<p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\r\n\r\n<img src='https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/05/Os-Simpsons.jpg' class='w-100 image-fluid'>\r\n\r\n<p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<p>",
    },
  });

  await prisma.game.create({
    data: {
      title: 'God Of War',
      year_release: 2018,
      price: 5990,
      resume: `It is a new beginning for Kratos. Living as a man, outside the shadow of the gods, he seeks solitude in the unfamiliar lands of Norse mythology. With new purpose and his son at his side, Kratos must fight for survival as powerful forces threaten to disrupt the new life he has created...`,
      image: `https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.jpg`,
      igdb_link: 'https://www.igdb.com/games/god-of-war--1',
      igdb_rating: 9.5,
      platforms: 'PS4, PS5',
      developer: 'Santa Mônica Studios',
      genres: "Action, Third Person, Adventure, Hack and slash/Beat 'em up",
      amazon_link:
        'https://www.amazon.com.br/God-War-Padr%C3%A3o-PlayStation-4/dp/B079581SQQ',
    },
  });

  await prisma.game.create({
    data: {
      title: 'SpiderMan',
      year_release: 2018,
      price: 6990,
      resume: `Starring the world’s most iconic Super Hero, Spider-Man features the acrobatic abilities, improvisation and web-slinging that the wall-crawler is famous for, while also introducing elements never-before-seen in a Spider-Man game. From traversing with parkour and utilizing the environment, to new combat and blockbuster set pieces, it’s Spider-Man unlike any you’ve played before.`,
      image: `https://images.igdb.com/igdb/image/upload/t_cover_big/co1r77.jpg`,
      igdb_link: 'https://www.igdb.com/games/marvels-spider-man',
      igdb_rating: 8.8,
      platforms: 'PS4, PS5',
      developer: 'Santa Mônica Studios',
      genres: "Action, Third Person, Adventure, Hack and slash/Beat 'em up",
      amazon_link: 'amazon_link',
    },
  });

  await prisma.book.create({
    data: {
      title: 'Sapiens: A Brief History of Humankind',
      year_release: 2014,
      price: 2990,
      image: 'https://m.media-amazon.com/images/I/51Sn8PEXwcL.jpg',
      amazon_link:
        'https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari-ebook/dp/B00ICN066A/ref=sr_1_2?crid=165V6E4JEUXKV&dchild=1&keywords=yuval+harari&qid=1632431375&s=digital-text&sprefix=yuval+ha%2Cdigital-text%2C288&sr=1-2',
      resume: 'From a renowned historian comes a groundbreaking narrative of humanity’s creation and evolution—a #1 international bestseller—that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be “human.” One hundred thousand years ago, at least six different species of humans inhabited Earth. Yet today there is only one—homo sapiens. What happened to the others? And what may happen to us? Most books about the history of humanity pursue either a historical or a biological approach, but Dr. Yuval Noah Harari breaks the mold with this highly original book that begins about 70,000 years ago with the appearance of modern cognition. From examining the role evolving humans have played in the global ecosystem to charting the rise of empires, Sapiens integrates history and science to reconsider accepted narratives, connect past developments with contemporary concerns, and examine specific events within the context of larger ideas.',
      pages: 464,
      genres: 'Historic',
      author: 'Yuval Noah Harari ',
    },
  });

  await prisma.movie.create({
    data: {
      title: 'Duna',
      year_release: 2021,
      image: 'https://m.media-amazon.com/images/I/51Sn8PEXwcL.jpg',
      tmdb_link:
        'https://www.themoviedb.org/movie/438631-dune?language=pt-BR',
      tmdb_rating: 9.5,
      resume: 'Em um futuro distante, planetas são comandados por casas nobres que fazem parte de um império feudal intergalático. Paul Atreides é um jovem cuja família toma o controle do planeta deserto Arrakis, também conhecido como Duna. A única fonte da especiaria Melange, a substância mais importante do cosmos, Arrakis se mostra ser um planeta nem um pouco fácil de governar.',
      genres: 'Action, Adventure',
      duration: '2h 15min',
    },
  });

  await prisma.tvshow.create({
    data: {
      title: 'Duna',
      year_release: 2021,
      image: 'https://m.media-amazon.com/images/I/51Sn8PEXwcL.jpg',
      tmdb_link:
        'https://www.themoviedb.org/movie/438631-dune?language=pt-BR',
      tmdb_rating: 9.5,
      resume: 'Em um futuro distante, planetas são comandados por casas nobres que fazem parte de um império feudal intergalático. Paul Atreides é um jovem cuja família toma o controle do planeta deserto Arrakis, também conhecido como Duna. A única fonte da especiaria Melange, a substância mais importante do cosmos, Arrakis se mostra ser um planeta nem um pouco fácil de governar.',
      genres: 'Action, Adventure',
      duration: '2h 15min',
    },
  });
};

main();
