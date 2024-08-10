export type CategoryType = {
  id: string | number;
  name: string;
  desc?: string;
  description?: string;
};

export type Slide = {
  id: number;
  image: string;
  text: string;
};

export const apiSlidesInfo = [
  { url: "/img/slider3.jpg", alt: "Banner 1", text: "Text Slide 1" },
  { url: "/img/Raw.jpg", alt: "Banner 2", text: "Text Slide 2" },
  { url: "/img/slider6.jpg", alt: "Banner 3", text: "Text Slide 3" },
  { url: "/img/slider4.jpg", alt: "Banner 3", text: "Text Slide 4" },
];

export const blogInfo = [
  {
    blog_id: 1,
    date: "10 Aug 2024",
    img: "/img/blog/construction1.jpg",
    title: "The Future of Sustainable Construction Materials",
    content:
      "As the construction industry evolves, sustainability has become a key focus. Discover the latest eco-friendly materials, such as recycled steel and low-carbon concrete, that are paving the way for greener buildings.",
    authorName: "Angela",
    authorImg: "/img/author.jpg",
  },
  {
    blog_id: 2,
    date: "12 Aug 2024",
    img: "/img/blog/construction2.jpg",
    title: "Why Quality Steel Matters in Modern Construction",
    content:
      "Steel is a crucial material in construction, offering strength and flexibility. Learn why investing in high-quality steel can make a significant difference in the longevity and safety of your projects.",
    authorName: "Angela",
    authorImg: "/img/author.jpg",
  },
  {
    blog_id: 3,
    date: "15 Aug 2024",
    img: "/img/blog/construction3.jpg",
    title: "Top Trends in Brick Manufacturing for 2024",
    content:
      "Brick manufacturing has seen major advancements in recent years. From high-strength bricks to improved thermal insulation, explore the top trends that are revolutionizing the industry.",
    authorName: "Angela",
    authorImg: "/img/author.jpg",
  },
];

export const testimonialInfo = [
  {
    authorImg: "/img/1.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed earum nemo, officia maiores corporis eveniet ...",
    authorName: "Elfried KIDJE",
    rating: 5,
  },
  {
    authorImg: "/img/1.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed earum nemo, officia maiores corporis eveniet ...",
    authorName: "Elfried Karl",
    rating: 5,
  },
];

export const productsTest = [
  {
    id: 1,
    img: "/img/product/1.png",
    reviews: 4,
    name: "Product Name 1",
    price: 90,
    oldPrice: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi magnam nisi earum, nihil consequuntur harum hic molestias nulla quasi voluptas quae dolor soluta, iusto explicabo, voluptatibus est exercitationem sit.",
  },
  {
    id: 2,
    img: "/img/product/2.png",
    reviews: 4,
    name: "Product Name 2",
    price: 100,
    oldPrice: 150,
    reduction: "-33%",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi magnam nisi earum, nihil consequuntur harum hic molestias nulla quasi voluptas quae dolor soluta, iusto explicabo, voluptatibus est exercitationem sit.",
  },
  {
    id: 3,
    img: "/img/product/3.png",
    reviews: 4,
    name: "Product Name 3",
    price: 120,
    oldPrice: 200,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi magnam nisi earum, nihil consequuntur harum hic molestias nulla quasi voluptas quae dolor soluta, iusto explicabo, voluptatibus est exercitationem sit.",
  },
  {
    id: 4,
    img: "/img/product/4.png",
    reviews: 4,
    name: "Product Name 4",
    price: 120,
    oldPrice: 200,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi magnam nisi earum, nihil consequuntur harum hic molestias nulla quasi voluptas quae dolor soluta, iusto explicabo, voluptatibus est exercitationem sit.",
  },
  {
    id: 5,
    img: "/img/product/5.png",
    reviews: 4,
    name: "Product Name 5",
    price: 120,
    oldPrice: 200,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi magnam nisi earum, nihil consequuntur harum hic molestias nulla quasi voluptas quae dolor soluta, iusto explicabo, voluptatibus est exercitationem sit.",
  },
  {
    id: 6,
    img: "/img/product/6.png",
    reviews: 4,
    name: "Product Name 6",
    price: 120,
    oldPrice: 200,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi magnam nisi earum, nihil consequuntur harum hic molestias nulla quasi voluptas quae dolor soluta, iusto explicabo, voluptatibus est exercitationem sit.",
  },
  {
    id: 7,
    img: "/img/product/7.png",
    reviews: 4,
    name: "Product Name 7",
    price: 120,
    oldPrice: 200,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi magnam nisi earum, nihil consequuntur harum hic molestias nulla quasi voluptas quae dolor soluta, iusto explicabo, voluptatibus est exercitationem sit.",
  },
  {
    id: 8,
    img: "/img/product/8.png",
    reviews: 4,
    name: "Product Name 8",
    price: 120,
    oldPrice: 200,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi magnam nisi earum, nihil consequuntur harum hic molestias nulla quasi voluptas quae dolor soluta, iusto explicabo, voluptatibus est exercitationem sit.",
  },
];

export const dailyTest = {
  id: 1,
  img: "/img/product/1.png",
  reviews: 4,
  name: "Product Name 1",
  price: 90,
  old_price: 100,
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed earum nemo, officia maiores corporis eveniet ratione magnam facere voluptates consequuntur cumque.",
  total_quantity: 3,
};

export const sortProduct = [
  {
    id: 1,
    img: "/img/product/8.png",
    reviews: 4,
    name: "Fresh Red Seedless 1",
    price: 90,
    oldPrice: 100,
  },
  {
    id: 2,
    img: "/img/product/2.png",
    reviews: 4,
    name: "Fresh Red Seedless 2",
    price: 100,
    oldPrice: 150,
    reduction: "-33%",
  },
  {
    id: 3,
    img: "/img/product/7.png",
    reviews: 4,
    name: "Fresh Red Seedless 3",
    price: 120,
    oldPrice: 200,
  },
  {
    id: 4,
    img: "/img/product/4.png",
    reviews: 4,
    name: "Fresh Red Seedless 4",
    price: 120,
    oldPrice: 200,
  },
  {
    id: 5,
    img: "/img/product/5.png",
    reviews: 4,
    name: "Fresh Red Seedless 5",
    price: 120,
    oldPrice: 200,
  },
];

export const apiCategory = [
  { id: 1, name: "Steel", description: "High-quality construction steel." },
  {
    id: 2,
    name: "Cement",
    description: "Durable and strong cement for all construction needs.",
  },
  {
    id: 3,
    name: "ACC Blocks",
    description: "Lightweight and energy-efficient ACC blocks.",
  },
  {
    id: 4,
    name: "Bricks",
    description: "Sturdy and reliable bricks for construction.",
  },
  { id: 5, name: "Sand", description: "Fine and coarse sand for building." },
  {
    id: 6,
    name: "Gravel",
    description: "Premium gravel for foundations and roads.",
  },
  {
    id: 7,
    name: "Concrete",
    description: "Ready-mix concrete for construction projects.",
  },
];

export const archives = [
  { archive_id: 1, date: "September 2021" },
  { archive_id: 2, date: "October 2020" },
  { archive_id: 3, date: "July 2019" },
  { archive_id: 4, date: "September 2021" },
  { archive_id: 5, date: "October 2020" },
  { archive_id: 6, date: "July 2019" },
];

export const tags = [
  { tag_id: 1, name: "STEEL" },
  { tag_id: 2, name: "CEMENT" },
  { tag_id: 3, name: "BRICKS" },
  { tag_id: 4, name: "SAND" },
  { tag_id: 5, name: "GRAVEL" },
  { tag_id: 6, name: "CONCRETE" },
  { tag_id: 7, name: "ACC BLOCKS" },
  { tag_id: 8, name: "BUILDING MATERIAL" },
  { tag_id: 9, name: "CONSTRUCTION" },
];

export const teams = [
  {
    team_id: 1,
    img: "/img/team/1.jpg",
    name: "Kailash",
    role: "Web Developer",
  },
  { team_id: 2, img: "/img/team/2.jpg", name: "Kailash", role: "Designer" },
  {
    team_id: 3,
    img: "/img/team/3.jpg",
    name: "Kailash",
    role: "Frontend Developer",
  },
  {
    team_id: 4,
    img: "/img/team/4.jpg",
    name: "Kailash",
    role: "Backend Developer",
  },
  {
    team_id: 5,
    img: "/img/team/5.jpg",
    name: "Kailash",
    role: "Project Manager",
  },
  { team_id: 6, img: "/img/team/6.jpg", name: "Kailash", role: "DevOps" },
];

export const searchData = [
  { search_id: 1, name: "Steel" },
  { search_id: 2, name: "Cement" },
  { search_id: 3, name: "ACC Blocks" },
  { search_id: 4, name: "Bricks" },
  { search_id: 5, name: "Sand" },
  { search_id: 6, name: "Gravel" },
  { search_id: 7, name: "Concrete" },
];

export const customers = [
  {
    lastname: "John",
    firstname: "Doe",
    email: "john@doe.com",
    address: "123 Main Street",
  },
  {
    lastname: "John",
    firstname: "Doe",
    email: "john@doe.com",
    address: "123 Main Street",
  },
  {
    lastname: "John",
    firstname: "Doe",
    email: "john@doe.com",
    address: "123 Main Street",
  },
  {
    lastname: "John",
    firstname: "Doe",
    email: "john@doe.com",
    address: "123 Main Street",
  },
  {
    lastname: "John",
    firstname: "Doe",
    email: "john@doe.com",
    address: "123 Main Street",
  },
];
