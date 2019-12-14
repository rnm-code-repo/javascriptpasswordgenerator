
var finalpwd = '';

function randomString(length, chars) {
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var result = '';
    for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
    return result;
}

function getPwd() {
    var pwType;
    var pwLen;
    
    bootbox.prompt({
        title: "Please select your password options",
        inputType: 'checkbox',
        inputOptions: [{
            text: 'Should have upper case',
            value: 'A',
        }, {
            text: 'Should have lower case',
            value: 'a',
        }, {
            text: 'Should have numbers',
            value: '#',
        }, {
            text: 'Should have special characters',
            value: '!',
        }],
        callback: function (result) {
            if (result != null) {
                if (result.length > 0) {
                    console.log(result);
                    pwType = result.toString().replace(/,/g,'');
                    bootbox.prompt({
                        title: "What should be the lenght of you password",
                        inputType: 'number',
                        callback: function (result) {
                            if (result === undefined || result.length === 0 || result < 1) {
                                    alert('Please provide password length');
                                    return false;
                            } else {
                                console.log("Length==>"+result.length);
                                if(result > 0) {
                                    pwLen = result;
                                }
                                
                            }
                            console.log(pwLen + '--' + pwType);
    
                            finalpwd = randomString(pwLen, pwType);
                            console.log('====>' + finalpwd);
                            document.getElementById('exampleFormControlTextarea3').value = finalpwd;
                            return;
                        }
                    });
                    
                } else {
                    alert("Please select atleast one option");
                    return false;
                }
            }
        }
    });
}

function copyPwd() {
    var copyText = document.getElementById("exampleFormControlTextarea3");
    copyText.removeAttribute("disabled")
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    copyText.setAttribute("disabled", true);
    alert("Copied the text: " + copyText.value);
  }