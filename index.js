var accountSid = "AC16b0412c5eba93b329d54871983272c6";
var authToken = "0c3f71f04244cdfb1146cc56d29d14bf";

var twilio = require('twilio')(accountSid,authToken)


twilio.messages.create({
    from: '+12294514402',
    to:'+917207107927',
    body:"This is an alert message for you to complete the first visit before deadline i.e 26th June,2024"
})
.then((res)=>(console.log('message has sent!')))
.catch((err)=>{
    console.log(err)
});