const express = require('express');
const router = express.Router();

const itemList = 	
{
  "itemList": [
    {
      "id": 1,
      "name": "Hello",
      "createdAt": "2024-01-01T04:17:57.000Z"
    },
    {
      "id": 2,
      "name": "Hello",
      "createdAt": "2024-01-01T04:17:57.000Z"
    },
    {
      "id": 3,
      "name": "Hello",
      "createdAt": "2024-01-01T04:17:58.000Z"
    }
  ]
}

router.get("/:id", (req, res) => {
  res.send(itemList);
});
