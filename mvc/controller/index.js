const { getDbComments, getDBCustomers }  = require('../model/comment');

exports.getMain = async (req, res) => {
  res.render('index.ejs', {
    data: await getDBCustomers(),
  });
};

exports.postMain = (req, res) => {
  res.send('post닷');
};

exports.getId = (req, res) => {
  const { id } = req.params;
  res.render("paramIndex.ejs", {   // res.render로 바꿔야 함
    id,
    data: getDbComments(),
  });
};
