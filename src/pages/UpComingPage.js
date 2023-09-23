const UpComingPage = () => {
 const openYouTubeVideo = (videoId) => {
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  window.open(videoUrl, '_blank');
 };
 return (
  <div className="upcoming">
   <h2>Coming Soon</h2>
   <div className="coming-con">
    <div className="coming-card">
     <img src="/images/barbie.webp" alt="Movie Cover" />
    </div>

    <div className="coming-card">
     <p className="info">Start Thursday</p>
     <h3>Barbie</h3>
     <p className="duration">114 mins | 20/07/2023</p>
     <p className="desc">Eccentric and individualistic, Barbie is exiled from Barbieland because of her imperfections. When her home world is in peril, Barbie returns...</p>
     <button className="playVideoButton" onClick={() => openYouTubeVideo('pBk4NYhWNMM')}>Trailer</button>
    </div>
   </div>

   <div className="coming-con">
    <div className="coming-card">
     <img src="/images/ninja-turtle.jpeg" alt="Movie Cover" />
    </div>

    <div className="coming-card">
     <p className="info">Start Thursday</p>
     <h3>Teenage Mutant Ninja Turtles: Mutant Mayhem</h3>
     <p className="duration">99 mins | 14/09/2023</p>
     <p className="desc">In Teenage Mutant Ninja Turtles: Mutant Mayhem, after years of being sheltered from the human world, the Turtle brothers set out to win the hearts of New Yorkers and be accepted as normal teenagers through heroic acts.</p>
     <button className="playVideoButton" onClick={() => openYouTubeVideo('IHvzw4Ibuho')}>Trailer</button>
    </div>
   </div>

   <div className="coming-con">
    <div className="coming-card">
     <img src="/images/meg.jpeg" alt="Movie Cover" />
    </div>

    <div className="coming-card">
     <p className="info">Start Thursday</p>
     <h3>Meg 2: The Trench</h3>
     <p className="duration">116  mins | 03/08/2023</p>
     <p className="desc">Get ready for the ultimate adrenaline rush this summer in "Meg 2: The Trench," a literally larger-than-life thrill ride that supersizes the 2018 blockbuster and takes the action to higher heights and even greater depths with multiple massive Megs and so much more!</p>
     <button className="playVideoButton" onClick={() => openYouTubeVideo('dG91B3hHyY4')}>Trailer</button>
    </div>
   </div>

   <div className="coming-con">
    <div className="coming-card">
     <img src="/images/nun.jpg" alt="Movie Cover" />
    </div>

    <div className="coming-card">
     <p className="info">Start Friday</p>
     <h3>The Nun II</h3>
     <p className="duration">109  mins | 07/09/2023</p>
     <p className="desc">1956 – France. A priest is murdered. An evil is spreading. The sequel to the worldwide smash hit follows Sister Irene as she once again comes face-to-face with Valak, the demon nun.</p>
     <button className="playVideoButton" onClick={() => openYouTubeVideo('QF-oyCwaArU')}>Trailer</button>
    </div>
   </div>

  </div>
 )
}
export default UpComingPage;