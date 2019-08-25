const express = require('express');
const router = require('express').Router();
// const crypto = require('crypto');
// const multer = require('multer');
// const GridFsStorage = require('multer-gridfs-storage');
// const Grid = require('gridfs-stream');
// const methodOverride = require('method-override');
const Profile = require('../models/Profile');


// To use static files like css, images
router.use(express.static("public"));


router.get('/add', (req, res) => {
    res.render('profile/add');
})

router.post('/add', (req, res) => {
    const newEmployee = new Profile({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        contactNo: req.body.contact,
        salary: req.body.salary,
        skills: req.body.skills,
        profilePic: req.body.profile_pic,
        location: req.body.location,
        bankDetails: {
            bankName: req.body.bank_name,
            accountNumber: req.body.account_number
        },
        social: {
            github: req.body.github,
            twitter: req.body.twitter,
            facebook: req.body.facebook,
            instagram: req.body.instagram,
            linkedin: req.body.linkedin
        },
        maritalstatus: req.body.marital,
        gender: req.body.gender,
        bloodGroup: req.body.bloodGroup,
        post: req.body.position,
        resume: req.body.resume,
        description: req.body.description,
        education: {
            school: req.body.school,
            board: req.body.board,
            college: req.body.college,
            branch: req.body.branch,
            description: req.body.description_of_education
        }
    })
    newEmployee.save()
    .then(employee => {
        res.redirect('/');
    })
    .catch(error => {
        console.log(error);
    });
})

router.get('/:id', (req, res) => {
    Profile.findOne({_id: req.params.id})
    .then(employee => {
        res.render('profile/employee', {employee: employee});
    })
});

router.get('/delete/:id', (req, res) => {
    Profile.deleteOne({_id: req.params.id})
    .then(() => {
        res.redirect('/');
    })
})

router.get('/edit/:id', (req, res) => {
    Profile.findOne({_id: req.params.id})
    .then(employee => {
        res.render('profile/edit', {employee: employee});
    })
})




module.exports = router;