//https://youtu.be/Epr9rm1yH4Y?si=oz50pLJl-eqoXrjF
//<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Epr9rm1yH4Y?si=PRJaaQH4-rOlmfJf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

function create(){
    let ID = document.getElementById("ID").value;
    ID = ID.replace("https://youtu.be/", "");
    console.log(ID)
    let embed = `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/${ID}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    document.getElementById("video").innerHTML += embed;
}
