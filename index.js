

let peopleElem = document.getElementById('people');

const fetchUser = async () => {
    // const res = await axios.get('https://randomuser.me/api/')
    const res = await axios.get('https://randomuser.me/api/?results=10',);
    // const comments = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1');
    // console.log(comments);
    
    console.log(res)
    for (let i = 0; i < res.data.results.length; i++) {
        let profile = res.data.results[i]
        let randDiv = document.createElement('span');
        // let ranComments = comments.data.name;
        let template = `
            <div class="card mt-4 mx-4 shadow">
                <div>
                    <img class="card-img-top profilePic" src="${profile.picture.medium}">
                </div>
                <div class="card-body bg-light">
                    <h4 class="card-title name">${profile.name.title} ${profile.name.first} ${profile.name.last}</h4>
                    <h6 class="card-title name">${profile.gender}</h6>
                    <div class="likesncomments d-flex justify-content-between mt-3">
                      <div class="likes"><i class="fa fa-thumbs-up text-primary " aria-hidden="true"></i> <i class="fa fa-heart text-danger m" aria-hidden="true"></i> 105</div>
                      <div class="comments">85 comments</div>
                    </div>
                    <div class="LCS d-flex justify-content-between pt-2">
                    <div id="numbersOfThumbsup"><i class="fa fa-thumbs-o-up" id="thumbsUp1" aria-hidden="true"></i></div>
                    <div><i class="fa fa-comment-o" aria-hidden="true"></i>Comments</div>
                    <div><i class="fa fa-share" aria-hidden="true"></i>Share</div>
                    </div>
                    <div class="comments"> 
                    <p>$</p>
                    <p></p>
                    <p></p>
                    </div>
                </div>
            </div>
        `;
       
        randDiv.innerHTML = template;
        peopleElem.appendChild(randDiv);    
    }
    


}

// data: Array(5)
// 0: {postId: 1, id: 1, name: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: 'laudantium enim quasi est quidem magnam voluptate ???utem quasi\nreiciendis et nam sapiente accusantium'}
// 1: {postId: 1, id: 2, name: 'quo vero reiciendis velit similique earum', email: 'Jayne_Kuhic@sydney.com', body: 'est natus enim nihil est dolore omnis voluptatem n???iatur\nnihil sint nostrum voluptatem reiciendis et'}
// 2: {postId: 1, id: 3, name: 'odio adipisci rerum aut animi', email: 'Nikita@garfield.biz', body: 'quia molestiae reprehenderit quasi aspernatur\naut ???mus et vero voluptates excepturi deleniti ratione'}
// 3: {postId: 1, id: 4, name: 'alias odio sit', email: 'Lew@alysha.tv', body: 'non et atque\noccaecati deserunt quas accusantium u???r itaque dolor\net qui rerum deleniti ut occaecati'}
// 4: {postId: 1, id: 5, name: 'vero eaque aliquid doloribus et culpa', email: 'Hayden@althea.biz', body: 'harum non quasi et ratione\ntempore iure ex volupta???ugit inventore cupiditate\nvoluptates magni quo et'}
// length: 5

// cell: "06-77-62-31-45"
// dob: {date: '1996-10-13T02:28:15.573Z', age: 26}
// email: "leonie.gonzalez@example.com"
// gender: "female"
// id: {name: 'INSEE', value: '2NNaN00999038 07'}
// location: {street: {???}, city: 'Poitiers', state: 'Seine-Maritime', country: 'France', postcode: 43393, ???}
// login: {uuid: 'a67195bd-5ea7-4e8a-9c18-37f8c65342e4', username: 'orangeelephant524', password: 'amateurs', salt: '5PB7FO1U', md5: '86c695fca484919233f8e328d937c503', ???}
// name: {title: 'Mrs', first: 'L??onie', last: 'Gonzalez'}
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




// let numbersOfThumbsup = document.getElementById("numbersOfThumbsup")
// console.log(numbersOfThumbsup);
// numbersOfThumbsup.textContent=0;



// document.querySelector("#thumbsUp1").addEventListener("click", function(e){
// if (numbersOfThumbsup.textContent == '0') {
// numbersOfThumbsup.textContent++   
// } else {
// numbersOfThumbsup.textContent = 0  

// }
// })






