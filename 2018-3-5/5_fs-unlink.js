const fs = require('fs');
    /*
        unlink(删除哪个文件,回调(err))
    */
    fs.unlink('message.txt', (err) => {
        if (err) throw err;
        console.log('成功');
    });