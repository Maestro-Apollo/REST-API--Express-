exports.getPost = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'This is a post', content: 'This is my first post' }]
    });
}

exports.createPost = (req, res, next) => {
    let title = req.body.title;
    let content = req.body.content;

    res.status(201).json({
        message: 'Successfully created post',
        posts: { id: new Date().toISOString(), title: title, content: content }
    })
}