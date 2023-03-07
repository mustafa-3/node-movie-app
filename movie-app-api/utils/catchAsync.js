// Function wraps the controllers and returns the errors to the global error handler
const catchAsync = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch(next);
  };
};

module.exports = catchAsync;
