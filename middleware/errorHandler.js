const { contants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.json({ message: err.message, stackTrace: err.stack });

  switch (statusCode) {
    case contants.VALIDATION_ERROR:
      res.json({
        title: "Validation error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case contants.UNAUTHORIZED_ERROR:
      res.json({
        title: "unauthorized error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case contants.FORBIDDEN_ERROR:
      res.json({
        title: "forbidden error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case contants.NOT_FOUND:
      res.json({
        title: "Not found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case contants.SERVER_ERROR:
      res.json({
        title: "server error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    default:
      console.log("No error, all good!");
      break;
  }
};

module.exports = errorHandler;
