// object literals

// const blogs = [
//     {title: 'why mac & cheese rules', likes: 30}
// ];

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [
        {title: 'why mac and cheese rules', likes: 30},
        {title: '10 things to make with marmite', likes: 50}
    ],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logBlogs(){
        // console.log(this.blogs);/* 'this' keyword represent the root element.... in this case it refers to user object since the method is used on the user objetc */
        console.log('this user has written the following blogs: ');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
}; 

// console.log(user);
// console.log(user.name);

// user.age = 40;
// console.log(user.age);

// console.log(user.blogs);
// console.log(user.email[7]);

// const key = 'location';
// console.log(user[key]);

// console.log(user['name']);
// user['name'] = 'chun-li';
// console.log(user.name);


// console.log(typeof user);


user.login();
user.logout();
user.logBlogs();
