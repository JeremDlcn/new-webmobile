import "./Flag.css";

function Flag(props) {
    const country = [{
            name: "France",
            flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
        },
        {
            name: "Allemagne",
            flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
        },
        {
            name: "Italie",
            flag: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
        },
        {
            name: "Japon",
            flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
        },
        {
            name: "Russie",
            flag: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
        },
        {
            name: "UK",
            flag: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg",
        },
        {
            name: "USA",
            flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
        },
        {
            name: "URSS",
            flag: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_Soviet_Union.svg",
        },
        {
            name: "Hongrie",
            flag: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Hungary.png",
        },
        {
            name: "JO",
            flag: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Olympic_flag.svg",
        },
        {
            name: "Chine",
            flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
        },
        {
            name: "Roumanie",
            flag: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
        },
        {
            name: "Ethiopie",
            flag: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Flag_of_Ethiopia_%281996%E2%80%932009%2C_2-3%29.svg",
        },
        {
            name: "Pologne",
            flag: "https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg",
        },
        {
            name: "Australie",
            flag: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Flag_of_Australia_%281903%E2%80%931908%29.svg",
        },
        {
            name: "Pays-Bas",
            flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
        },
        {
            name: "Kenya",
            flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg",
        },
        {
            name: "Jamaique",
            flag: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg",
        },
    ];
    //get the object by then country name in props
    const countryObject = country.find(
        (country) => country.name === props.country
    );

    return ( 
    <div className = "flag">
        <div className = "flag-item">
            <img src = { countryObject.flag }  alt = { countryObject.name } /></div>
    </div>
    );
}

export default Flag;