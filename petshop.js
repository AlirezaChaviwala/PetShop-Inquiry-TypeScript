var PetShop = /** @class */ (function () {
    function PetShop() {
    }
    PetShop.createPet = function (petData) {
        var num = 0;
        if ((['CAT', 'DOG', 'FISH', 'PARROT', 'RABBIT'].indexOf(petData.typeVal)) > -1) {
            if (PetShop.catalogue.length > 0) {
                PetShop.catalogue.forEach(function (el) {
                    if (el.typeVal == petData.typeVal) {
                        num = 1;
                        el.countVal += petData.countVal;
                    }
                });
                if (num === 0) {
                    PetShop.catalogue.push(petData);
                }
            }
            else {
                PetShop.catalogue.push(petData);
            }
        }
        else {
            console.log("Pet not in catalogue.\n        Catalogue only has DOG,CAT,FISH,PARROT,RABBIT.\n        Please enter your choice in capital letters");
        }
    };
    PetShop.petCount = function () {
        console.log('PET CATALOGUE:');
        PetShop.catalogue.forEach(function (el) {
            console.log(el.typeVal + " : " + el.countVal);
        });
    };
    PetShop.catalogue = [];
    return PetShop;
}());
var CustomerInquiry = /** @class */ (function () {
    function CustomerInquiry(reqData) {
        this.query = [];
        this.query.push(reqData);
    }
    //{type:dog,count:5}
    CustomerInquiry.createInquiry = function (reqData) {
        if ((['CAT', 'DOG', 'FISH', 'PARROT', 'RABBIT'].indexOf(reqData.typeVal)) > -1) {
            var obj = new CustomerInquiry(reqData);
            CustomerInquiry.enquiryList.push(obj);
            return obj;
        }
        else {
            console.log("Pet not in catalogue.\n        Catalogue only has DOG,CAT,FISH,PARROT,RABBIT.\n        Please enter your choice in capital letters");
        }
    };
    CustomerInquiry.isAvailable = function () {
        var len = 5;
        if (CustomerInquiry.enquiryList.length < len) {
            len = CustomerInquiry.enquiryList.length;
        }
        var _loop_1 = function (i) {
            var num = 0;
            PetShop.catalogue.forEach(function (el) {
                if (el.typeVal === CustomerInquiry.enquiryList[i].query[0].typeVal && el.countVal > CustomerInquiry.enquiryList[i].query[0].countVal) {
                    num = 1;
                    console.log("Your inquiry for " + CustomerInquiry.enquiryList[i].query[0].typeVal + " : " + CustomerInquiry.enquiryList[i].query[0].countVal + " is available");
                }
            });
            if (num === 0) {
                console.log("Your inquiry for " + CustomerInquiry.enquiryList[i].query[0].typeVal + " : " + CustomerInquiry.enquiryList[i].query[0].countVal + " is not available");
            }
        };
        for (var i = 0; i < len; i++) {
            _loop_1(i);
        }
    };
    CustomerInquiry.enquiryList = [];
    return CustomerInquiry;
}());
PetShop.createPet({ typeVal: 'DOG', countVal: 20 });
PetShop.createPet({ typeVal: 'CAT', countVal: 2 });
PetShop.createPet({ typeVal: 'FISH', countVal: 10 });
PetShop.createPet({ typeVal: 'RABBIT', countVal: 20 });
PetShop.petCount();
var enquiry1 = CustomerInquiry.createInquiry({ typeVal: 'CAT', countVal: 1 });
var enquiry2 = CustomerInquiry.createInquiry({ typeVal: 'DOG', countVal: 10 });
var enquiry3 = CustomerInquiry.createInquiry({ typeVal: 'FISH', countVal: 5 });
CustomerInquiry.isAvailable();
