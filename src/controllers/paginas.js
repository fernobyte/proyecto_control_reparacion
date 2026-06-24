const mispaginas = {
    login: (req, res) => {
        res.render('login', { page: 'login' });
    },

    index: (req, res) => {
        res.render('index', { page: 'index' });
    },

    bosquejo: (req, res)=>{
        res.render('lista_bosquejo', { page: 'lista_bosquejo' });
    }
};

module.exports = mispaginas;