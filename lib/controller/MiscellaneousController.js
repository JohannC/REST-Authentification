exports.getIndex = function (req, res, next){
    const notifications = [];
    notifications.push({ type: 'success', message: 'Welcome to REST-Authentification-backend!' })
    res.json({ notifications: notifications });
}

exports.getPublicKey = function (req, res, next){
    const notifications = [];
    notifications.push({ type: 'success', message: 'public key' })
    res.json({ notifications: notifications });
}