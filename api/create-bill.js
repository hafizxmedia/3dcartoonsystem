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
"TikTok 3D Cartoon AI Prompt System"
);


form.append(
"billDescription",
`TikTok 3D Cartoon AI System

Akses produk:
https://3d-cartoon-ai.vercel.app

Terima kasih kerana membeli.`
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
