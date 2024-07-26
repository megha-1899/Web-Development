const booklist = require("../models/booklist");
const Book = require("../models/booklist");

const getAllBooks = async (req, res,next) => {
    let books;
    try{
        books = await Book.find();
    } catch(err) {
        console.log(err);
    }

    if(!books) {
        return res.status(404).json({message: "No products found"});
    }

    return res.status(200).json({books});
};

const getByID = async (req, res, next) => {
    const id = req.params.id    
    let book;
    try {
        book = await Book.findById(id);
    } catch (err) {
        console.log(err);
    }
    
    if(!book) {
        return res.status(404).json({message: "No Book Found"});
    }
    return res.status(200).json({book});
}

const addBook = async (req, res, next) => {
    const {name, author, description, price, available, image} = req.body;
    let book;
    try{
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image
        });

        await book.save();
    } catch (err) {
        console.log(err);
    }

    if (!book) {
        return res.status(500).json({message: "Unable to Add"});
    }
    return res.status(201).json({ book });
}

const updateBook = async (req, res, next) => {
    const id = req.params.id;
    const {name, author, description, price, available, image} = req.body;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available,
            image
        });
        book = await book.save();
    } catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({message: "Unable to Update by this id"});
    }
    return res.status(201).json({ book });
};

const deleteBook = async(req, res, next) => {
    const id = req.params.id; 
    let book;
    try {
        book = await Book.findByIdAndDelete(id);
    }catch (err) {
        console.log(err);
    }
    if (!book){
        return res.status(404).json({message: "Unable to Delete by this ID"});
    }
    return res.status(200).json({message: "Product Successfully Deleted" });
};

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getByID = getByID;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;