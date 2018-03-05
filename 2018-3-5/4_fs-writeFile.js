const fs = require('fs');
/*
   writeFile('写什么文件',内容,(err)=>{成功})
*/
    fs.writeFile('message.txt', 'Hello Node.js', (err) => {
        if (err) throw err;
        console.log('成功');
    });