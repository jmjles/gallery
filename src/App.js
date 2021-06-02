import Gallery from "./components/gallery/Gallery";

class Image {
  constructor({ src, alt, title, desc, shortDesc }) {
    this.src = src;
    this.alt = alt;
    this.title = title;
    this.desc = desc;
    this.shortDesc = shortDesc;
  }
}
const picture = new Image({
  src: "https://picsum.photos/200/600?random=1",
  title: "Random First Pic",
  shortDesc:
    "Veniam in incididunt consequat ut culpa occaecat quis qui minim eu laboris eu quis.",
});
const picture2 = new Image({
  src: "https://picsum.photos/200/300?random=2",
  title: "Random Second Pic",
  shortDesc:
    "Veniam in incididunt consequat ut culpa occaecat quis qui minim eu laboris eu quis.",
});
const picture3 = new Image({
  src: "https://picsum.photos/200/300?random=3",
  title: "Random Third Pic",
  shortDesc:
    "Veniam in incididunt consequat ut culpa occaecat quis qui minim eu laboris eu quis.",
});
const picture4 = new Image({
  src: "https://picsum.photos/200/300?random=4",
  title: "Random Fourth Pic",
  shortDesc:
    "Veniam in incididunt consequat ut culpa occaecat quis qui minim eu laboris eu quis.",
});
const picture5 = new Image({
  src: "https://picsum.photos/500/200?random=5",
  title: "Random Fifth Pic",
  shortDesc:
    "Veniam in incididunt consequat ut culpa occaecat quis qui minim eu laboris eu quis.",
});
const picture6 = new Image({
  src: "https://picsum.photos/200/300?random=6",
  title: "Random Sixth Pic",
  shortDesc:
    "Veniam in incididunt consequat ut culpa occaecat quis qui minim eu laboris eu quis.",
});
const picture7 = new Image({
  src: "https://picsum.photos/200/300?random=7",
  title: "Random Seventh Pic",
  shortDesc:
    "Veniam in incididunt consequat ut culpa occaecat quis qui minim eu laboris eu quis.",
});
const picture8 = new Image({
  src: "https://picsum.photos/200/300?random=8",
  title: "Random Eight Pic",
  shortDesc:
    "Veniam in incididunt consequat ut culpa occaecat quis qui minim eu laboris eu quis.",
});
const picture9 = new Image({
  src: "https://picsum.photos/200/300?random=9",
  title: "Random Ninth Pic",
  shortDesc:
    "Veniam in incididunt consequat ut culpa occaecat quis qui minim eu laboris eu quis.",
});
const picture10 = new Image({
  src: "https://picsum.photos/200/300?random=10",
  title: "Random Tenth Pic",
  shortDesc:
    "Veniam in incididunt consequat ut culpa occaecat quis qui minim eu laboris eu quis.",
});
const pictures = [
  picture,
  picture2,
  picture3,
  picture4,
  picture5,
  picture6,
  picture7,
  picture8,
  picture9,
  picture10,
];

function App() {
  return (
    <div className="App">
      <Gallery pictures={pictures} />
    </div>
  );
}

export default App;
