import express from 'express';
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../models/productModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const products = await getAllProducts();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await getProductById(req.params.id);
        res.status(200).send(product);
    } catch (error) {
        res.status(404).send({ message: 'Product not found' });
    }
});

router.post('/', async (req, res) => {
    try {
        const newProduct = await createProduct(req.body);
        res.status(201).send({ message: 'New Product Created', data: newProduct });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await updateProduct(req.params.id, req.body);
        res.status(200).send({ message: 'Product Updated', data: updatedProduct });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await deleteProduct(req.params.id);
        res.status(200).send({ message: 'Product Deleted' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

export default router;
