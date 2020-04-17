const nodemailer = require('nodemailer');

const emailSender = 'toua.dev@outlook.com'
const moment = require("moment");
const dateTh = require("moment-timezone");
dateTh.locale('th')


const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'toua.dev@outlook.com', // your email
        pass: 'Xj2qjm5x'              // your password
    }
})

exports.SendmailNotApprove = function (not_approved, email) {
    try {
        const mailOptions = {
            from: emailSender,  // sender
            to: email,  // list of receivers
            subject: 'test',  // Mail subject
            html: `<b>${not_approved}</b>`, // HTML body
            // attachments: [{
            //     path: '' // full or relative path to file
            // }]
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err)
            }
            else {
                console.log(info);
            }
        });

    } catch (error) {
        console.log(error)
    }
}

exports.addBooking = function (data) {
    console.log("data ", data)
    const room = ['', 'Meeting Room1', 'Meeting Room2', 'Meeting Room3', 'Meeting Room4', 'Meeting Room5', 'BoardRoom', 'Auditorium', 'Canteen']
    try {
        const mailOptions = {
            from: emailSender,  // sender
            to: emailSender,  // list of receivers
            subject: 'มีการสำรองห้องประชุมใหม่',  // Mail subject
            html: `<b>การสำรองห้องประชุม</b>
            </br>
            <p>ห้องประชุม ${room[data.room_id]}<br />
            หรัสการสำรอง ${data.code}<br />
            เวลาสำรองห้องประชุม ${data.time_start}.00 น. ถึง ${data.time_end}.00 น.<br />
            วันที่สำรอง ${dateTh(data.date).tz('Asia/Bangkok').add(543, 'year').format('ll')} <br />
            วันที่แจ้ง ${dateTh(data.create_at).tz('Asia/Bangkok').add(543, 'year').format('ll')}<br />    
            ชื่อ-นามสกุล ${data.name_person}<br />  
            ฝ่าย/บริษัท ${data.company_name}<br />  
            หมายเลขโทรศัพท์ ${data.phone}<br />  
            E-mail ${data.email}<br />  
            หัวข้อการใช้งานประชุม ${data.topic}<br />  
            </p>
            `, // HTML body
            // attachments: [{
            //     path: '' // full or relative path to file
            // }]
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err)
            }
            else {
                console.log(info);
            }
        });

    } catch (error) {
        console.log(error)
    }
}

exports.approveBooking = function ({ email, name_person }) {
    try {
        const mailOptions = {
            from: emailSender,  // sender
            to: email,  // list of receivers
            subject: 'ยืนยันการสำรองห้องประชุม',  // Mail subject
            html:
                `<p>Dear Sir/ Madam ${name_person},<br />
            With reference to Meeting booking application form, I am pleased to send confirmed<br />
            e-mail that you have reserved the meeting room.<br />
            Should there be any further information you may require, please feel free to contact<br />
            Marketing Communication Department (50160) anytime. If there any requirement,<br />
            please contact to this email.<br />
            Please kindly find reserved detail as below :<br />
            Best regards,<br/>
            ----------------------------------------------------------------------------------------------------------------<br />
            -----------------------------------<br />
            เรียน คุณ ${name_person}<br />
            ตามที่ท่านได้กรอกแบบฟอร์มการสำรองห้องประชุม<br />
            ทางฝ่ายการตลาดขอยืนยันการสำรองห้องประชุมดังกล่าวแล้ว,<br />
            หากท่านต้องการประสานงานเรื่องรูปแบบการจัดงานเพิ่มเติม<br />
            สามารถประสานงานกับทางฝ่ายสื่อสารการตลาด (50160)<br />
            ข้อมูลการสำรองห้องประชุมตามข้อมูล ดังต่อไปนี้<br />
            (หากมีข้อผิดพลาดรบกวนตอบกลับได้ที่อีเมล์นี้)<br />
            ขอแสดงความนับถือ,<br />
            </br>

            Twitter : <a href='https://twitter.com/kkusciencepark'>https://twitter.com/kkusciencepark</a><br />
            IG : <a href='https://www.instagram.com/kkusciencepark/'>https://www.instagram.com/kkusciencepark/</a></p>
            `, // HTML body
            // attachments: [{
            //     path: '' // full or relative path to file
            // }]
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err)
            }
            else {
                console.log(info);
            }
        });

    } catch (error) {
        console.log(error)
    }
}
