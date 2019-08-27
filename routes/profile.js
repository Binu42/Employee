const express = require('express');
const router = require('express').Router();
const mongoose = require('mongoose');

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
    Profile.findOne({
            _id: req.params.id
        })
        .then(employee => {
            res.render('profile/employee', {
                employee: employee
            });
        })
});

router.get('/delete/:id', (req, res) => {
    Profile.deleteOne({
            _id: req.params.id
        })
        .then(() => {
            res.redirect('/');
        })
})

router.get('/edit/:id', (req, res) => {
    Profile.findOne({
            _id: req.params.id
        })
        .then(employee => {
            res.render('profile/edit', {
                employee: employee
            });
        })
})

router.post('/update/:id', (req, res) => {
    Profile.findOne({
            _id: req.params.id
        })
        .then(employee => {
            employee.name = req.body.name,
                employee.email = req.body.email,
                employee.age = req.body.age,
                employee.contactNo = req.body.contact,
                employee.salary = req.body.salary,
                employee.skills = req.body.skills,
                employee.location = req.body.location,
                employee.bankDetails.bankName = req.body.bank_name,
                employee.bankDetails.accountNumber = req.body.account_number,
                employee.social.github = req.body.github,
                employee.social.twitter = req.body.twitter,
                employee.social.facebook = req.body.facebook,
                employee.social.instagram = req.body.instagram,
                employee.social.linkedin = req.body.linkedin,
                employee.description = req.body.description,
                employee.education.school = req.body.school,
                employee.education.board = req.body.board,
                employee.education.college = req.body.college,
                employee.education.branch = req.body.branch,
                employee.education.description = req.body.description_of_education
            employee.save()
                .then(employee => {
                    res.redirect('/profile/' + employee.id);
                })
                .catch(error => {
                    console.log(error);
                });
        })
})

router.post('/search', (req, res) => {
    const name = req.body.name;
    const searchedEmp = []
    Profile.find({})
        .then(employees => {
            for (var i = 0; i < employees.length; i++) {
                if (employees[i].name.toLowerCase().includes(name.toLowerCase())) {
                    searchedEmp.push(employees[i]);
                }
            }
            res.render('profile/index', {
                profile: searchedEmp
            })
        })
})


module.exports = router;