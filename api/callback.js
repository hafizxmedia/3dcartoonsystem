export default async function handler(req,res){


if(req.method !== "POST"){
return res.status(405).send("Not allowed");
}


const {
status,
refno,
billcode,
amount,
hash
}=req.body;



console.log(
"TOYYIB CALLBACK",
{
status,
refno,
billcode,
amount
}
);


// SUCCESS
if(status==="1"){


console.log(
"PAYMENT SUCCESS"
);


// nanti letak:
// - Meta Purchase
// - TikTok Pixel
// - database
// - email automation


}



res.status(200).send("OK");


}
