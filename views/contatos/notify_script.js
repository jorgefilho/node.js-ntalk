<script src="/socket.io/socket.io.js"></script>
<script>
	var socket = io.connect('http://localhost:3000');
	var notify = function(data){
		var id = 'notify_' + data.el;
		var notify = document.getElementById(id);
		notify.textContent = data.msg;
	};
	socket.on('notify-onlines', function(email){
		var opts = {el: email, msg: 'Online'};
		notify(opts);
	});
	socket.on('notify-offline', function(email){
		var opts = {el: email, msg: 'Offline'};
		notify(opts);
	});
	socket.on('new-message', function(data) {
		var opts = {el: email, msg: 'Mensagem'};
		var id   = 'chat_' + data.email;
		var chat = document.getElementById('chat_' + data.email);
		chat.href += '?' + data.sala;
	});
</script>