export default async function handler(req, res) {

const body=req.body;


const name=body.name;
const email=body.email;
const phone=body.phone;

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
"billTo",
name
);


form.append(
"billEmail",
email
);


form.append(
"billPhone",
phone
);


form.append(
"billPayorInfo",
"1"
);

form.append(
"billContentEmail",
`Terima kasih atas pembelian anda.

Link akses produk anda:

https://3d-cartoon-ai.vercel.app
password:789123

Simpan email ini untuk rujukan anda.

Selamat menggunakan sistem.`"
);


form.append(
"billReturnUrl",
"https://3dcartoon-ai.vercel.app/thankyou.html"
);

// callback
form.append(
"billCallbackUrl",
"https://3dcartoon-ai.vercel.app/api/callback"
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
