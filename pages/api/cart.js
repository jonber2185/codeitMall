let cart = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(cart);
  } else if (req.method === 'PUT') {
    cart = req.body;
    return res.status(200).json(cart);
  } else {
    return res.sendStatus(404);
  }
}
