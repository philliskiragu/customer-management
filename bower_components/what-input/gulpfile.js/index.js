var requireDir = require('require-dir');

// Require all tasks in gulpfile.js.js/tasks, including subfolders
requireDir('./tasks', { recurse: true });
