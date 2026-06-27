export default async function handler(req,res){


if(req.method !== "POST"){
return res.status(405).send("Not allowed");
}


const data=req.body;


console.log(
"TOYYIB CALLBACK",
data
);



if(String(data.status)==="1"){


console.log(
"PAYMENT SUCCESS"
);


// Purchase nanti sini


}


res.status(200).send("OK");


}
