type petType='DOG'|'CAT'|'FISH'|'PARROT'|'RABBIT';

interface PetProperty{
    typeVal:petType,
    countVal:number
}

class PetShop{
    static catalogue:Array<PetProperty>=[];

    static createPet(petData:PetProperty){
        let num=0;
        if((['CAT','DOG','FISH','PARROT','RABBIT'].indexOf(petData.typeVal))>-1){
            if(PetShop.catalogue.length>0){
                PetShop.catalogue.forEach(el=>{
                    if(el.typeVal==petData.typeVal){
                        num=1;
                        el.countVal+=petData.countVal;
                    }
                })
                if(num===0){
                    PetShop.catalogue.push(petData);
                }
            }else{
                PetShop.catalogue.push(petData);
            }
        }
        else {console.log(`Pet not in catalogue.
        Catalogue only has DOG,CAT,FISH,PARROT,RABBIT.
        Please enter your choice in capital letters`);}
    }

    static petCount(){
        console.log('PET CATALOGUE:');
        PetShop.catalogue.forEach((el)=>{
            console.log(`${el.typeVal} : ${el.countVal}`);
        })
    }

}

class CustomerInquiry{
    query:Array<PetProperty>=[];
    static enquiryList=[];

    constructor(reqData:PetProperty){
        this.query.push(reqData);
    }

    //{type:dog,count:5}

    static createInquiry(reqData:PetProperty):object{
        if((['CAT','DOG','FISH','PARROT','RABBIT'].indexOf(reqData.typeVal))>-1){
            let obj=new CustomerInquiry(reqData);
            CustomerInquiry.enquiryList.push(obj);
            return obj;
        }
        else {console.log(`Pet not in catalogue.
        Catalogue only has DOG,CAT,FISH,PARROT,RABBIT.
        Please enter your choice in capital letters`);}
    }

    static isAvailable(){
        let len=5;
        if(CustomerInquiry.enquiryList.length<len){
            len=CustomerInquiry.enquiryList.length;
        }

        for(let i=0;i<len;i++){
            let num=0;
            PetShop.catalogue.forEach((el)=>{
                if(el.typeVal===CustomerInquiry.enquiryList[i].query[0].typeVal&&el.countVal>CustomerInquiry.enquiryList[i].query[0].countVal){
                    num=1;
                    console.log(`Your inquiry for ${CustomerInquiry.enquiryList[i].query[0].typeVal} : ${CustomerInquiry.enquiryList[i].query[0].countVal} is available`)
                }   
            })
            if(num===0){console.log(`Your inquiry for ${CustomerInquiry.enquiryList[i].query[0].typeVal} : ${CustomerInquiry.enquiryList[i].query[0].countVal} is not available`)}
        }
    }

}



PetShop.createPet({typeVal:'DOG',countVal:20});
PetShop.createPet({typeVal:'CAT',countVal:2});
PetShop.createPet({typeVal:'FISH',countVal:10});
PetShop.createPet({typeVal:'RABBIT',countVal:20});
PetShop.petCount();
let enquiry1=CustomerInquiry.createInquiry({typeVal:'CAT',countVal:1});
let enquiry2=CustomerInquiry.createInquiry({typeVal:'DOG',countVal:10});
let enquiry3=CustomerInquiry.createInquiry({typeVal:'FISH',countVal:5});
CustomerInquiry.isAvailable();