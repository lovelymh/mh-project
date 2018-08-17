const router = require('express').Router();
const User = require('../models/user');
const passport = require('passport');
// router.get('/about', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });

// Find All
router.get('/', (req, res) => {
  console.log('hello3');
   //res.render("About");
  User.findAll()
    .then((users) => {
      if (!todos.length) return res.status(404).send({ err: 'User not found' });
      res.send(`find successfully: ${users}`);
      //res.send(todos);
    })
    .catch(err => res.status(500).send(err));
});



// Find One by todoid
router.get('/todoid/:todoid', (req, res) => {
  User.findOneByTodoid(req.params.todoid)
    .then((todo) => {
      if (!todo) return res.status(404).send({ err: 'Todo not found' });
      res.send(`findOne successfully: ${todo}`);
    })
    .catch(err => res.status(500).send(err));
});

// Create new todo document
router.post('/signup', (req, res) => {
  console.log('hello');
  User.create(req.body)
    .then(user => {
      res.send(user);
      //console.log(todo);
      //res.redirect('/');
    //  res.render(__dirname + '/src/components/About/index');
    })
    .catch(err => res.status(500).send(err));

  //res.send('<script type="text/javascript">alert("오류발생");</script>');
  //res.redirect('/');
});

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/'
}), (req, res) => {
  console.log("good!");
  res.send({login: 'success'});
//  res.redirect('/');
});
// router.post('/login', (req, res) => {
//   console.log(req.body);
// })

// Update by todoid
router.put('/todoid/:todoid', (req, res) => {
  Todo.updateByTodoid(req.params.todoid, req.body)
    .then(todo => res.send(todo))
    .catch(err => res.status(500).send(err));
});

// Delete by todoid
router.delete('/todoid/:todoid', (req, res) => {
  Todo.deleteByTodoid(req.params.todoid)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
});

module.exports = router;
// module.exports = function(app, Book)
// {
//     // GET ALL BOOKS
//     app.get('/', function(req,res){
//       console.log('hello');
//         Book.find(function(err, books){
//             if(err) return res.status(500).send({error: 'database failure'});
//             res.json(books);
//         })
//     });
//
//     // // GET SINGLE BOOK
//     // app.get('/api/books/:book_id', function(req, res){
//     //     Book.findOne({_id: req.params.book_id}, function(err, book){
//     //         if(err) return res.status(500).json({error: err});
//     //         if(!book) return res.status(404).json({error: 'book not found'});
//     //         res.json(book);
//     //     })
//     // });
//     //
//     // // GET BOOK BY AUTHOR
//     // app.get('/api/books/author/:author', function(req, res){
//     //     Book.find({author: req.params.author}, {_id: 0, title: 1, published_date: 1},  function(err, books){
//     //         if(err) return res.status(500).json({error: err});
//     //         if(books.length === 0) return res.status(404).json({error: 'book not found'});
//     //         res.json(books);
//     //     })
//     // });
//
//     // CREATE BOOK
//     app.post('/', function(req, res){
//         var book = new Book();
//         book.title = req.body.input;
//         book.author = req.body.input2;
//         book.published_date = new Date();
//
//         book.save(function(err){
//             if(err){
//                 console.error(err);
//                 res.json({result: 0});
//                 return;
//             }
//
//             res.json({result: 1});
//
//         });
//     });
//
//     // // UPDATE THE BOOK
//     // app.put('/api/books/:book_id', function(req, res){
//     //     Book.update({ _id: req.params.book_id }, { $set: req.body }, function(err, output){
//     //         if(err) res.status(500).json({ error: 'database failure' });
//     //         console.log(output);
//     //         if(!output.n) return res.status(404).json({ error: 'book not found' });
//     //         res.json( { message: 'book updated' } );
//     //     })
//     // /* [ ANOTHER WAY TO UPDATE THE BOOK ]
//     //         Book.findById(req.params.book_id, function(err, book){
//     //         if(err) return res.status(500).json({ error: 'database failure' });
//     //         if(!book) return res.status(404).json({ error: 'book not found' });
//     //
//     //         if(req.body.title) book.title = req.body.title;
//     //         if(req.body.author) book.author = req.body.author;
//     //         if(req.body.published_date) book.published_date = req.body.published_date;
//     //
//     //         book.save(function(err){
//     //             if(err) res.status(500).json({error: 'failed to update'});
//     //             res.json({message: 'book updated'});
//     //         });
//     //
//     //     });
//     // */
//     // });
//     //
//     // // DELETE BOOK
//     // app.delete('/api/books/:book_id', function(req, res){
//     //     Book.remove({ _id: req.params.book_id }, function(err, output){
//     //         if(err) return res.status(500).json({ error: "database failure" });
//     //
//     //         /* ( SINCE DELETE OPERATION IS IDEMPOTENT, NO NEED TO SPECIFY )
//     //         if(!output.result.n) return res.status(404).json({ error: "book not found" });
//     //         res.json({ message: "book deleted" });
//     //         */
//     //
//     //         res.status(204).end();
//     //     })
//     // });
//
// }
