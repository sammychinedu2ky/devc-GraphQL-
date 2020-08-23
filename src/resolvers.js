let {authors,books} = require('./data')

exports.resolvers = {
    Query:{
        authors: (parent, args, context, info)=>{
            return authors
        },
        books: (parent,args,context,info)=>{
            return books
        }
    },
    Author:{
        id: (parent)=>{
            return parent.id;
        },
        name:(parent)=>{
            return parent.name
        },
        books:(parent)=>{
            return books.filter((i)=>i.author===parent.name)
        }
    },
    Book:{
        id:(parent)=>{
            return parent.id
        },
        title:(parent)=>{
            return parent.title
        },
        author:(parent)=>{
            return parent.author
        }
    },
    Mutation:{
        createAuthor:(parent,args)=>{
            let data = {
                id: Date.now(),
                name:args.name
            };
            authors = [...authors,data]
            return {...data,books:books.filter((i)=>i.author===args.name)}
        },
        createBook:(parent,args)=>{
            let data = {
                id: Date.now(),
                title: args.title,
                author: args.author
            }

            books =  [...books,data]
            return data
        },
        deleteAuthor:(parent, args)=>{
            authors = authors.filter(i=>i.name!==args.name)
            books = books.filter(i=>i.author!==args.name)
            return 'Author Deleted'
        },
        deleteBook:(parent,args)=>{
            books = books.filter(i=>i.title!==args.title)
            return 'Book deleted'
        }
    }
}