const ShortUrl = require('../models/urlModel');

const getIndex = async (req, res) => {
    const shortUrls = await ShortUrl.find();
    res.render('index', { shortUrls: shortUrls });
}
const createShortUrl = async (req, res) => {
    const data = await ShortUrl.create({ full: req.body.fullUrl });
    res.status(200).json({
        status: 'success',
        data
    });
}

const redirectLongUrl = async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
    if (shortUrl == null) return res.status(404).render('404');

    shortUrl.clicks++;
    shortUrl.save();

    let redirectURL = shortUrl.full;
    if (!redirectURL.match(/^(https?:)?\/\//i)) redirectURL = 'http://' + redirectURL;

    res.redirect(redirectURL);
}

module.exports = {
    getIndex,
    createShortUrl,
    redirectLongUrl
}