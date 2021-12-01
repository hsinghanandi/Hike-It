const DetailsFeatures = props => {

    return ( 
      <div className="detailsFeatures">
        <div className="detailsHeading">
            Features
        </div>
        <div className="detailsContent">
            <div className="detailsDesc">
                <p>This is the details description: rerit metus a gravida porta. Nam at facilisis dui.his is the details description: rerit metus a gravida porta. Nam at facilisis dui.his is the details description: rerit metus a gravida porta. Nam at facilisis dui.his is the details description: rerit metus a gravida porta. Nam at facilisis dui.his is the details description: rerit metus a gravida porta. Nam at facilisis dui. </p>
            </div>
            <ul>
                <li>Address: {props.address}</li>
                <li>{props.status ? "Currently open" : "Currently closed"}</li>
                <li>{props.phoneNumber}</li>
                <li>Rating: {props.rating}</li>
                <li>{props.types.length > 0 && props.types.map((type, index)=><div key={index}>{type}</div>)}</li>
                <li>{props.website}</li>
                <li>{props.openingDays}</li>
            </ul>
        </div>
      </div>
     );
}
 
export default DetailsFeatures;