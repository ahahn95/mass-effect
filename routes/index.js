var express = require('express');
var router = express.Router();

const create = (Name, Race, Class, Url) => ({Name, Race, Class, Url});

var Kaiden = create('Kaiden Alkeno', 'Human', 'Sentinel', '/images/kaiden.png');
var Tali = create('Tali\'Zorah nar Rayya', 'Quarian', 'Engineer','/images/tali.png');
var Liara = create('Liara T\'Soni', 'Asari', 'Adept', '/images/liara.png');
var Garrus = create('Garrus Vakarian', 'Turian', 'Infiltrator', '/images/garrus.png');
var Ashley = create('Ashley Williams', 'Human', 'Soldier', '/images/ashley.png');
var Wrex = create('Urdnot Wrex', 'Krogan', 'Vanguard', '/images/wrex.png');

/* GET home psage. */
router.get('/', function(req, res) {
    res.json([
        create(Kaiden), 
        create(Tali), 
        create(Liara),
        create(Garrus),
        create(Ashley),
        create(Wrex)
    ]);
});

module.exports = router;
