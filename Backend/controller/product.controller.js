import Product from "../models/product.model.js";
import product from "../models/product.model.js";
import asyncHandler from "express-async-handler";

// CREATE PRODUCT
const createProduct = asyncHandler(async (req, res) => {
  const newProduct = await Product(req.body);
  const product = newProduct.save();

  if (product) {
    res.status(201).json(product);
  } else {
    res.status(400);
    throw new Error("Product was not created");
  }
});

// DELETE PRODUCT
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("product was not deleted");
  } else {
    res.status(201).json("Product deleted successfully");
  }
});

// GET PRODUCT
const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  } else {
    res.status(200).json(product);
  }
});

// GET ALL PRODUCTS
const getAllproducts = asyncHandler(async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  const qsearch = req.query.search;

  let products;

  if (qNew) {
    product = await Product.find().sort({ createAt: -1 });
  } else if (qCategory) {
    product = await Product.find({ categories: { $in: [qCategory] } });
  } else if (qsearch) {
    product = await Product.find({
      $text: {
        $search: qsearch,
        $caseSensitive: false,
        $dicriticSensitive: false,
      },
    });
  } else {
    product = await Product.find().sort({ createdAt: -1 });
  }
});

// RATING PRODUCR
const ratingProduct = asyncHandler(async (req, res) => {
  const { star, name, comment, postedBy } = req.body;

  if (star && name && coment && postedBy) {
    const postedBy = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $push: { rating: { star, name, comment, postedBy } },
      },
      {
        new: true,
      }
    );
    res.status(201).json("product was rated successfully");
  }else{
    res.status(400);
    throw new Error("product was not rated successfully");
  }
});

export {ratingProduct, getAllproducts, getProduct, createProduct, updateProduct, deleteProduct}
