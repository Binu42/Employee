$(function () {
// Fields to Varify
    var name = $('#name');
    var email = $('#email');
    var age = $('#age');
    var contact = $('#contact');
    var salary = $('#salary');
    var skills = $('#skills');
    var uploadPic = $('#uploadPic');
    var address = $('#location');
    var bankName = $('#bank-name');
    var accountNumber = $('#account-number');
    var uploadResume = $('#uploadResume');
    var descriptionEmployee = $('#descriptionEmployee');
    var school = $('#school');
    var board = $('#school_board');
    var college = $('#comsgllege');
    var branch = $('#college_branch');
    var descriptionEducation = $('#description_education');

// calling check for each fields
    name.blur(() => check(name));
    email.blur(() => check(email));
    age.blur(() => check(age));
    contact.blur(() => check(contact));
    salary.blur(() => check(salary));
    skills.blur(() => check(skills));
    uploadPic.blur(() => check(uploadPic));
    address.blur(() => check(address));
    bankName.blur(() => check(bankName));
    accountNumber.blur(() => check(accountNumber));
    uploadResume.blur(() => check(uploadResume));
    descriptionEmployee.blur(() => check(descriptionEmployee));
    school.blur(() => check(school));
    branch.blur(() => check(branch));
    college.blur(() => check(college));
    board.blur(() => check(board));
    descriptionEducation.blur(() => check(descriptionEducation));


    // verify function to check fields
    function check(event){
            if(event.val().trim() === ""){
                error = true;
                event.css('box-shadow', '0px 0px 5px red');
                event.css('border', '1px solid #dc3113');
            }else {
                error = false;
                event.css('box-shadow', '0px 0px 5px green');
                event.css('border', '1px solid lightgreen');
            }
    }
})