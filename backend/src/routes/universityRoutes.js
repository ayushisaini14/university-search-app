import express from 'express';
import axios from 'axios';
import { Favorite } from '../models/index.js';

const router = express.Router();

//fecth universities
router.get('/universities', async (req, res) => {
    try {
        const response = await axios.get('http://universities.hipolabs.com/search?country=India');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching universities:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Save a university as a favorite
router.post('/favorites', async (req, res) => {
    try {
        const { university_name, state_province, web_page } = req.body;

        if (!university_name || !web_page) {
            return res.status(400).json({ message: 'Name and Web Page are required' });
        }

        // Save to the database
        const favorite = await Favorite.create({ university_name, state_province, web_page });
        res.status(201).json(favorite);
    } catch (error) {
        console.error('Error saving favorite:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


// Get all favorite universities
router.get('/favorites', async (req, res) => {
    try {
        const favorites = await Favorite.findAll();
        res.json(favorites);
    } catch (error) {
        console.error('Error fetching favorites:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;