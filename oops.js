const url="https://catfact.ninja/fact";

const fetchData=()=>{


    fetch(url).then((response)=>{
        console.log(response.json());
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    });
};

fetchData();