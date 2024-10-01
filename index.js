document.querySelector('.button').addEventListener('click',function(){
    let username = document.getElementById('username').value;
    let enterContent = document.getElementById('enter').value;
    let newContent = document.createElement('div');
    let messageBox = document.getElementById('messageBox');
    newContent.classList.add('content')
    newContent.innerHTML = `
    <div class="info">
            <li><img src="./head.jpg" height="70px" width="70px"></li>
            <li><span class="username">${username}</span></li>
            <li><span>发布于:${getCurrentTime()}</span></li>
        </div>
        <div class="message">
        ${enterContent}
        </div>
    `
    messageBox.insertBefore(newContent,messageBox.firstChild)
    
    document.getElementById('username').value = '';
    document.getElementById('enter').value = '';

    function getCurrentTime() {
        var now = new Date();
        var year = now.getFullYear();
        var month = ('0' + (now.getMonth() + 1)).slice(-2);
        var day = ('0' + now.getDate()).slice(-2);
        var hours = ('0' + now.getHours()).slice(-2);
        var minutes = ('0' + now.getMinutes()).slice(-2);
        var seconds = ('0' + now.getSeconds()).slice(-2);
        return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    }

})