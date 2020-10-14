function validation(req, res, next) {
    if (req.token) {
        console.log("Token Approved");
        next();
        return;
    }

    console.log("No Token");
    res.send("<h1>User Not Logged</h1>");
}
module.exports = validation;
