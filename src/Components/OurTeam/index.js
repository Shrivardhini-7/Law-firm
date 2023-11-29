import "./OurTeam.css"


let OurTeam = () =>  {

    let teamMember = (name, noOfCases) =>{
        let imagepath = `images/${name}.png`;
        console.log(imagepath);
       return(<>
        <div className="team-member" style={{backgroundColor: "#1D1D1D", color:"#ffff" }}>
            <img className= "member-image"src={imagepath} alt={name}></img>
            <div>
               <div className="team-member-name" >{name}</div>
               <div className="no-of-cases" >{noOfCases} Cases</div>
            </div>
        </div>
       </>)
       
    }
    return(<>
    <div className="section-6">
        <div className="section-6-heading">Our Team</div>
        <div className="team">
        {teamMember("Danial Def", "301")}
        {teamMember("Sanfole", "850")}
        {teamMember("Cesforilla", "470")}
        {teamMember("Colleen", "180")}
        {teamMember("Haldone", "212")}
        {teamMember("Nik Jeo", "350")}
        </div>
        

    </div>
    </>)
}
export default OurTeam;