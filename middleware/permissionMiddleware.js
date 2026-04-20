module.exports = (module, action) => {
  return (req, res, next) => {
    const user = req.user;

    if (!user || !user.role) {
      return res.status(403).json({ message: "Access forbidden" });
    }

    const permission = user.role.permissions[module][action];

    if (!permission) {
      return res.status(403).json({ message: "Not allowed" });
    }

    next();
  };
};