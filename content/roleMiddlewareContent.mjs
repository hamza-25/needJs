export const roleMiddlewareContent = (columnName, expectedValue) => {
    return `
const ${columnName} = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: 'User not authenticated' });
  }

  if (req.user.${columnName} != '${expectedValue}') {
    return res.status(403).json({ message: 'Access denied' });
  }

  next();
};

module.exports = ${columnName};
`;
}