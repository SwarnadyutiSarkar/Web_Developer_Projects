const User = require('../models/User');

exports.register = async (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  await user.save();
  res.send('User registered');
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) {
    res.send('Login successful');
  } else {
    res.send('Invalid credentials');
  }
};
