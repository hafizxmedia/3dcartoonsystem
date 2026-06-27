export default async function handler(req, res) {

if (req.method !== "POST") {
return res.status(405).json({
error:"Method not allowed"
});
}


const form = new URLSearchParams();


form.append(
"userSecretKey",
process.env.TOYYIB_SECRET
);


form.append(
"categoryCode",
process.env.TOYYIB_CATEGORY
);


form.append(
"billName",
"3DCartoonAI System"
);


form.append(
"billDescription",
"3D Cartoon AI System - Akses dihantar melalui email selepas pembayaran"
);


form.append(
"billPriceSetting",
"1"
);


form.append(
"billAmount",
"3900"
);


form.append(
"billPayorInfo",
"1"
);


form.append(
"billReturnUrl",
"https://3dcartoon-ai.vercel.app/thankyou.html"
);



const response =
await fetch(
"https://toyyibpay.com/index.php/api/createBill",
{
method:"POST",
body:form
}
);


const data =
await response.json();


res.json(data);

}
