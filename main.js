window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});


const localApi = 'http://localhost:7071/api/GetResumeVisitsCount';
const functionApi = 'https://resumecounterapi.azurewebsites.net/api/GetResumeVisitsCount?code=1PuamCS7g6t5e6TS75aQ7H8qp8nCh7Cs5eljWMEoPIClRPaYCd9HCw==';

const getVisitCount = () => {
    let count = 2;
    fetch(functionApi)
        .then(response => {
            return response.json()
        })
        .then(response => {
            console.log("Website called function API.");
            count = response.count;
            document.getElementById('counter').innerText = count;
        }).catch(function (error) {
            console.log(error);
        });
    return count;
}
