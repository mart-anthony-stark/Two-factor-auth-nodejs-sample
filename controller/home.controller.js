const msg = require("messagebird")(process.env.API_KEY);

module.exports = {
  getHome: (req, res) => {
    res.render("step1");
  },
  /**
   * Handle phone submission
   */
  postSubmitNumber: (req, res) => {
    const num = req.body.number;

    // Make request to send verification code
    msg.verify.create(
      num,
      {
        template: "Your verification code is %token.",
      },
      (err, response) => {
        if (err) {
          console.log(err);
          res.render("step1", {
            error: err.errors[0].description,
          });
        } else {
          console.log(response);
          res.render("step2", {
            id: response.id,
          });
        }
      }
    );
  },
  /**
   * Handle verification of code
   */
  postVerify: (req, res) => {
    
  },
};
