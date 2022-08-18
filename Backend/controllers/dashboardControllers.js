 const dashboard = (req, res) => {
    res.json(req.user).status(204)
}

module.exports = {
    dashboard
}