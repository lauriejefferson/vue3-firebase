const ninjas = ['shaun', 'mario', 'peach'];

const blog = { title: 'new blog', author: 'bowser' };

// console.log(...ninjas)

const idBlog = { ...blog, id: 1 };

console.log(idBlog);
