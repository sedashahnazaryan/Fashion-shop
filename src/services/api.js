export async function getData(){
    const response=await fetch("https://baby-island.herokuapp.com/homeproduct");
    const data=await response.json();
    return data;
}

