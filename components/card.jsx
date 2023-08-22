function Card (props){
  return (
    <div className="card">
       <img className="card-image" src={props.data.imageUrl} alt="" />
       <div className="info">
        <div className="location">
          <img src="location-pin.png" alt="" className="location-pin" />
          <h3 className="country">{props.data.location}</h3>
          <a className="google-maps" href={props.data.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className="place-title">{props.data.title}</h1>
        <p className="dates">{props.data.startDate} - {props.data.endDate}</p>
        <p className="text">{props.data.description}</p>
       </div>
    </div>
  )
}
export default Card