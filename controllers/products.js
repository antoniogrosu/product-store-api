const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "all products testing route" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "all products route" });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
