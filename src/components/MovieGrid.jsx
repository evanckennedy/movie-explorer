function MovieGrid() {
  return (
    <>
      <div className="grid-container">
        <a href="">
          <div className="column">
            <div className="content-container flex">
              <figure>
                <img src="https://raw.githubusercontent.com/mrspecht/media/main/img/jurassic-park.jpg" alt="" />
              </figure>
              <div className="content-text flex justify-between">
                <p>Jurassic Park</p>
                <p>1993</p>
              </div>
            </div>
          </div>
        </a>
        {/* Repeat the above div for each movie */}
      </div>
    </>
  )
}

export default MovieGrid;