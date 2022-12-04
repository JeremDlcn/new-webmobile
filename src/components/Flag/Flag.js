import './Flag.css';


function Flag(props) {
    const country = [
        {
            name: "France",
            flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
        },
        {
            name: "Allemagne",
            flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg"
        },
        {
            name: "Italie",
            flag: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg"
        },
        {
            name: "Japon",
            flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg"
        },
        {
            name: "Russie",
            flag: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg"
        },
        {
            name: "Royaume-Uni",
            flag: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg"
        },
        {
            name: "États-Unis",
            flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
        }
    ];
    //get the object by then country name in props
    const countryObject = country.find(country => country.name === props.country);

    return (
        <div className="flag">
            <div className="flag-item">
                <img src={countryObject.flag} alt={countryObject.name} />
            </div>
        </div>
    );
};

export default Flag;