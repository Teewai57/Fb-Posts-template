// fetch api



// async function getProfile() {
//     let profilePicture = document.getElementsByClassName('profilePic');
//     let profileName = document.querySelector('.name')   
//     console.log(profilePicture[0]);
//     const res = await axios.get('https://randomuser.me/api/')
//     const data = res.data.results[0];
//     console.log( data);
//     // localStorage.setItem('post', JSON.stringify(data))
//     // getData = JSON.parse(localStorage.getItem('post'))
//     console.log(getData);
//     profilePicture[0].setAttribute('src', `${getData.picture.medium}`);
//     profileName.textContent = `${data.name.first} ${data.name.last}`
//     console.log(profileName);

//     return data 

// }

// console.log(profileName);
// getProfile();

let peopleElem = document.getElementById('people');

const fetchUser = async () => {
    // const res = await axios.get('https://randomuser.me/api/')
    const res = await axios.get('https://randomuser.me/api/?results=100')
    
    console.log(res)
    for (let i = 0; i < res.data.results.length; i++) {
        let profile = res.data.results[i]
        let randDiv = document.createElement('span');
        let template = `
            <div class="card mt-4 mx-4">
                <div>
                    <img class="card-img-top profilePic" src="${profile.picture.medium}">
                </div>
                <div class="card-body">
                    <h4 class="card-title name">${profile.name.title} ${profile.name.first} ${profile.name.last}</h4>
                    <h6 class="card-title name">${profile.gender}</h6>
                </div>
            </div>
        `;
        randDiv.innerHTML = template;
        peopleElem.appendChild(randDiv);    
    }



}

// cell: "06-77-62-31-45"
// dob: {date: '1996-10-13T02:28:15.573Z', age: 26}
// email: "leonie.gonzalez@example.com"
// gender: "female"
// id: {name: 'INSEE', value: '2NNaN00999038 07'}
// location: {street: {…}, city: 'Poitiers', state: 'Seine-Maritime', country: 'France', postcode: 43393, …}
// login: {uuid: 'a67195bd-5ea7-4e8a-9c18-37f8c65342e4', username: 'orangeelephant524', password: 'amateurs', salt: '5PB7FO1U', md5: '86c695fca484919233f8e328d937c503', …}
// name: {title: 'Mrs', first: 'Léonie', last: 'Gonzalez'}
// nat: "FR"
// phone: "03-32-31-93-10"

fetchUser();



//  async function getData(){
//     const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
//     console.log(response);

//     response.data.forEach(post => {
//         // const profile = axios.get('https://randomuser.me/api/')

//         console.log(post);
//         let p = document.createElement('div')
//         p.textContent = post.title;
//         let parentElement = document.querySelector('.row');
//         console.log(parentElement);
//         p.classList.add('col-3')
//         // let profile = await getProfile();
//         // console.table(profile);

//         let anotherP = document.createElement('p');
//         // anotherP.textContent = profile.results[0].name.first
//         p.appendChild(anotherP);
//         parentElement.appendChild(p);


//     });


// }

// getData();
    
// let cardText = data.map((todo) => {

//     return `
//     <div class="col-3">
//     <img class="card-img-top" src="/pexels-karolina-grabowska-4194857 (1).jpg">
//     <h4>${todo.userId}</h4>
//     <p>${todo.id}</p>
//     <p>${todo.title}</p>
//     <p>${todo.completed}</p>
//     </div>
//     `

    
// })

// document.querySelector('.row').innerHTML = cardText;











