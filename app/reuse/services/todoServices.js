todoApp.service('FVService', function()
{
    var patterns = {
        required : {
            message : "required"
        },
        country_name : {
            pattern : /^[a-zA-Z ]{2,20}$/,
            message : "Letters of length 2 to 20 allowed."
        }
    };

   function isEmpty(object) {
        for(var key in object) {
            if(object.hasOwnProperty(key)){
                return false;
            }
        }
        return true;
    }

    this.formValidation = function(obj, validationCriteria)
    {
        obj = (typeof obj == 'undefined') ? {} : obj;
        validationCriteria = (typeof validationCriteria == 'undefined') ? {} : validationCriteria;

            var messageObj = {};

        for(var i in validationCriteria){
            var child_obj;
            var key = i;
            var val = validationCriteria[i];
            var check = 0;

            // If validation criteria finds 'compareValidation' and check if 1st and 2nd field is not empty ,
            // then compare the two fields
            if((key === 'compareValidation' )){
                if(obj[val.compare[0]] && obj[val.compare[1]] && (!eval(obj[val.compare[0]] + val.symbol + obj[val.compare[1]]))){
                    child_obj = val.message;
                    check += 1;
                }
            }

            for(var j= 0, len = val.length; j<len; j++)
            {
                if(key !== 'compareValidation' ){
                    if(val[j] == 'required'){
                        if(!obj[key]){
                            child_obj = patterns[val[j]].message;
                            check += 1;
                        }
                    } else{
                        // check if value of the input field of the form exists and then match the pattern
                        if(typeof obj[key] != 'undefined' && obj[key] !='' ){
                            if(!(patterns[val[j]].pattern).test(obj[key])){
                                child_obj = patterns[val[j]].message;
                                check += 1;
                            }
                        }
                    }
                }
            }

            if(check){
                messageObj[key]=child_obj;
            }
        }
        messageObj['status'] =isEmpty(messageObj);
        return messageObj;
    }
});