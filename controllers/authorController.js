const Author = require('../models/author');
const asyncHandler = require('express-async-handler');

//Display list of all authors
exports.author_list = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED: Author list');
});

//Display detail page for a specific author
exports.author_detail = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
});

//Display Author create form on GET
exports.author_create_get = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED: Author create GET');
});

//Handle author create on POST
exports.author_create_post = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED: Author create POST');
});

//Author delete form on GET
exports.author_delete_get = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED: Author delete GET');
});

//Handle author delete on POST
exports.author_delete_post = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED: Author delete POST');
});

//Display author update form on GET
exports.author_update_get = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED: Author update GET');
});

//Handle author update on POST
exports.author_update_post = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED: Author update POST');
});