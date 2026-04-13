const users = require("../data/users");

const getUsers = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve users",
      error: error.message,
    });
  }
};

module.exports = { getUsers };
