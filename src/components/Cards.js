function Cards( props ) {
    return (
        <div class="card" style={{width: "18rem"}}>
        <img class="card-img-top" src={props.src} alt="Card  cap" />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.prag}</p>
          <a href="/" class="btn btn-primary">search</a>
        </div>
      </div>
    );
}

export default Cards;