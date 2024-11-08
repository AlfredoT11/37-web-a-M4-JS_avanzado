
//let BASE_URL = "http://localhost:3000";
let BASE_URL = "https://pokeapi.co/api/v2/";

/*
async function requestPokedex(){

    try{
        let response = await fetch(`${BASE_URL}/api/data`, {
            //mode: 'no-cors'
        });
        console.log(response);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
    }catch(error){
        console.log(error);
    }

}

requestPokedex();
*/

let isLoading = false; // Flag to prevent multiple fetch calls

let limit = 100;
let currentOffset = 0;

// Function to fetch data from the API
async function fetchData() {
    if (isLoading) return;
    isLoading = true;

    try {
        let response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${currentOffset}`);
        
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        
        let data = await response.json();
        renderData(data);
        
        currentOffset += limit; 
    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        isLoading = false;
    }
}

// Function to render data to the DOM
function renderData(data) {
    const container = document.getElementById('data-container');
    
    data.results.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('data-item');
        div.innerText = `Item: ${item.name}`; // Adjust to your API's data structure
        container.appendChild(div);
    });
}

// Setting up the Intersection Observer
const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !isLoading) {
        fetchData(); // Load more data when `loading` element is visible
    }
}, {
    rootMargin: '500px', // Trigger slightly before reaching the bottom
    threshold: 1 // Permite definir qué tanto porcentaje de un elemento debe verse para considerarlo como "visto".
});

// Start observing the `loading` element
observer.observe(document.getElementById('loading'));

// Initial fetch
fetchData();
