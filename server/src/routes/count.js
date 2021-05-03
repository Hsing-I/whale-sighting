const router = require('express').Router();
const needle = require('needle');

router.use((req, res, next) => {
  console.log('this is middleware in count route');
  next();
});

router.get('/total', (req, res) => {
  needle('get', 'http://hotline.whalemuseum.org/api/count')
    .then(data => {
      res.status(200).json(data.body);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get('/orca', (req, res) => {
  needle('get', 'http://hotline.whalemuseum.org/api/count.json?species=orca')
    .then(data => {
      res.status(200).json(data.body);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get('/minke', (req, res) => {
  needle('get', 'http://hotline.whalemuseum.org/api/count.json?species=minke')
    .then(data => {
      res.status(200).json(data.body);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get('/gray-whale', (req, res) => {
  needle('get', 'http://hotline.whalemuseum.org/api/count.json?species=gray whale')
    .then(data => {
      res.status(200).json(data.body);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get('/humpback', (req, res) => {
  needle('get', 'http://hotline.whalemuseum.org/api/count.json?species=humpback')
    .then(data => {
      res.status(200).json(data.body);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get('/dalls-porpoise', (req, res) => {
  needle('get', 'http://hotline.whalemuseum.org/api/count.json?species=dalls porpoise')
    .then(data => {
      res.status(200).json(data.body);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get('/harbor-porpoise', (req, res) => {
  needle('get', 'http://hotline.whalemuseum.org/api/count.json?species=harbor porpoise')
    .then(data => {
      res.status(200).json(data.body);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get('/atlantic-white-sided-dolphin', (req, res) => {
  needle('get', 'http://hotline.whalemuseum.org/api/count.json?species=atlantic white-sided dolphin')
    .then(data => {
      res.status(200).json(data.body);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get('/pacific-white-sided-dolphin', (req, res) => {
  needle('get', 'http://hotline.whalemuseum.org/api/count.json?species=pacific white-sided dolphin')
    .then(data => {
      res.status(200).json(data.body);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get('/harbor-seal', (req, res) => {
  needle('get', 'http://hotline.whalemuseum.org/api/count.json?species=harbor seal')
    .then(data => {
      res.status(200).json(data.body);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get('/northern-elephant-seal', (req, res) => {
  needle('get', 'http://hotline.whalemuseum.org/api/count.json?species=northern elephant seal')
    .then(data => {
      res.status(200).json(data.body);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get('/southern-elephant-seal', (req, res) => {
  needle('get', 'http://hotline.whalemuseum.org/api/count.json?species=southern elephant seal')
    .then(data => {
      res.status(200).json(data.body);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get('/california-sea-Lion', (req, res) => {
  needle('get', 'http://hotline.whalemuseum.org/api/count.json?species=california sea Lion')
    .then(data => {
      res.status(200).json(data.body);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get('/steller-sea-Lion', (req, res) => {
  needle('get', 'http://hotline.whalemuseum.org/api/count.json?species=steller sea Lion')
    .then(data => {
      res.status(200).json(data.body);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get('/sea-otter', (req, res) => {
  needle('get', 'http://hotline.whalemuseum.org/api/count.json?species=sea otter')
    .then(data => {
      res.status(200).json(data.body);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get('/other', (req, res) => {
  needle('get', 'http://hotline.whalemuseum.org/api/count.json?species=other')
    .then(data => {
      res.status(200).json(data.body);
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;