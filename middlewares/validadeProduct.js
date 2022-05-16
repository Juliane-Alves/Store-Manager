// const ERROR_STATUS = 400;
// const STATUS_HTTP_ERROR = 422; // lint não aceitou as constates 

const productValidation = (req, res, next) => {
    const { name, quantity } = req.body;
    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }
    if (name.length < 5) {
      return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
    }
    if (quantity === undefined) {
      return res.status(400).json({ message: '"quantity" is required' });
      }
    if (quantity <= 0) {
      console.log('entrou no quantity');
      return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    }
  
    next();
  };

  module.exports = productValidation;