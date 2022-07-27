 const dashboard = (req, res) => {
    console.log(req.user)
    res.json({message:"You are now in the dashboard page"})
}

module.exports = {
    dashboard
}