const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    profilePic: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactNo: {
        type: Number,
        required: true
    },
    maritalstatus: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String
    },
    gender: {
        type: String,
        required: true
    },
    post: {
        type: String
    },
    resume: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    education: {
            school: {
                type: String,
                required: true
            },
            board: {
                type: String,
                required: true
            },
            college: {
                type: String,
                required: true
            },
            branch: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        },
    social: {
        github: {
            type: String
        },
        facebook: {
            type: String
        },
        twitter: {
            type: String
        },
        linkedin: {
            type: String
        },
        instagram: {
            type: String
        }
    },
    bankDetails: {
        bankName: {
            type: String,
            required: true
        },
        accountNumber: {
            type: Number,
            required: true
        }
    }
    ,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('profile', ProfileSchema);