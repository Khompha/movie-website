// const moviesList = [
//   {
//     logo: "the-little-mermaid-title.png",
//     cover: "the-little-mermaid.jpeg",
//     name: "the-little-mermaid",
//     year: "2023",
//     age:"12+",
//     duration:"2h 14min",
//     genre:"Romance",
//     description:"The mentioned sectors are just a few of what the whole industry  consists of, the industry is aimed at the physicalappearance of a person because physicala ppearance are the first thing we see whenmeet a man or a woman, as looking representable is necessary"
//   },{
//     logo: "the-little-mermaid-title.png",
//     cover: "the-little-mermaid.jpeg",
//     name: "the-little-mermaid",
//     year: "2023",
//     age:"12+",
//     duration:"2h 14min",
//     genre:"Romance",
//     description:"The mentioned sectors are just a few of what the whole industry  consists of, the industry is aimed at the physicalappearance of a person because physicala ppearance are the first thing we see whenmeet a man or a woman, as looking representable is necessary"
//   }{
//     logo: "the-little-mermaid-title.png",
//     cover: "the-little-mermaid.jpeg",
//     name: "the-little-mermaid",
//     year: "2023",
//     age:"12+",
//     duration:"2h 14min",
//     genre:"Romance",
//     description:"The mentioned sectors are just a few of what the whole industry  consists of, the industry is aimed at the physicalappearance of a person because physicala ppearance are the first thing we see whenmeet a man or a woman, as looking representable is necessary"
//   }
// ]

function toggleVideo() {
  const trailer = document.querySelector('.trailer');
  trailer.classList.toggle('active');
  const video = trailer.querySelector('video');
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}



function changeBg(Bg, title) {
  console.log('Changing background to:', Bg);
  const banner = document.querySelector('.banner');
  const contents = document.querySelectorAll('.content');

  console.log("current banners", banner);
  banner.style.backgroundSize = 'cover';
  banner.style.backgroundPosition = 'center';
  banner.style.backgroundImage = `url("./images/movies/${Bg}")`;
  contents.forEach(content => {
    content.classList.remove('active');
    if (content.classList.contains(title)) {
      console.log(Bg);
      content.classList.add('active');
      
    }
  });
}
