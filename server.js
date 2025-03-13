const express = require('express');
const crypto = require('crypto');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/generate-signature', (req, res) => {
    const { appID, senha } = req.body;
    const timestamp = Math.floor(Date.now() / 1000);
    const signatureString = appID + timestamp + senha;

    const signature = crypto.createHmac('sha256', senha)
                            .update(signatureString)
                            .digest('hex');

    res.json({ appID, timestamp, signature });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
